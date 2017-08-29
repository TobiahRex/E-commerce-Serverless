/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import AWS from 'aws-sdk';
import { Promise as bbPromise } from 'bluebird';
import moment from 'moment';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import emailSchema from '../../schemas/emailSchema';
import db from '../../connection';
import {
  getBillingCountry as GetBillingCountry,
  createEmailProductList as CreateEmailProductList,
  generateEmailBody as GenerateEmailBody,
} from './helpers';
import Transaction from '../transaction';

const {
  AWS_ACCESS_KEY_ID: accessKeyId,
  AWS_SECRET_ACCESS_KEY: secretAccessKey,
  AWS_SES_REGION: region,
} = process.env;

AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

const ses = new AWS.SES();

/**
* 1) Check for requried input arguments.
* 2) Create a new email & resolve with new email.
*
* @param {object} fields - Required fields for creating new Email.
*
* @return {object} - Promise: resolved - new email.
*/
emailSchema.statics.createEmail = fields =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.createEmail\n');

  const {
    type,
    purpose,
    language,
    subjectData,
    bodyHtmlData,
    bodyTextData,
    replyToAddress,
  } = fields;

  if (
    !type ||
    !purpose ||
    !language ||
    !replyToAddress ||
    !subjectData ||
    !bodyHtmlData ||
    !bodyTextData
  ) {
    console.log(`Missing required input arguments for "createEmail": Provided Arguments = ${fields}`);
    reject(`Missing required input arguments for "createEmail": Provided Arguments = ${fields}`);
  } else {
    bbPromise.fromCallback(cb => Email.create({ ...fields }, cb))
    .then((newEmail) => {
      console.log('\nSuccessfully created new Email!\n _id: ', newEmail._id);
      resolve(newEmail);
    });
  }
});

/**
* Function: "findEmailAndFilterLanguage"
* 1) Find all emails with input argument "type".
* 2) Filter any results by request language.
*
* @param {string} type - The email type to find.
* @param {string} requestedLangauge - The language to filter by.
*
* @return {object} - Promise: resolved - found email.
*/
emailSchema.statics.findEmailAndFilterLanguage = (type, reqLanguage) =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.findEmailAndFilterLanguage\n');

  if (!type || !reqLanguage) {
    console.log(`Missing required arguments. "type": ${type || 'undefined'}. "reqLanguage": ${reqLanguage || 'undefined'}.  `);
    reject(new Error(`Missing required arguments. "type": ${type || 'undefined'}. "reqLanguage": ${reqLanguage || 'undefined'}.  `));
  } else {
    Email
    .find({ type })
    .exec()
    .then((dbEmails) => {
      if (!dbEmails.length) {
        console.log('FAILED: Find email with type: ', type);
        return reject(new Error(`FAILED: Find email with type: "${type}".  `));
      }
      console.log('SUCCEEDED: Find email with type: ', type, '\nEmails: ', dbEmails.length);

      const foundEmail = dbEmails
      .filter(dbEmail =>
        (dbEmail.type === type) && (dbEmail.language === reqLanguage),
      )[0];

      if (!foundEmail) {
        console.log('FAILED: Filter email results array.');
        return reject(new Error('FAILED: Filter email results array.'));
      }

      console.log(`Filtered email results: Found "type" = ${foundEmail.type}.  Requested "type" = ${type}.  Found "language" = ${reqLanguage}.  Requested "language" = ${reqLanguage}.  `);

      return resolve(foundEmail);
    })
    .catch((error) => {
      console.log(`Error while trying to find any emails with "type" = ${type}.  ERROR = ${error}`);
      return reject(new Error(`Error while trying to find emails with "type" = ${type}.  ERROR = ${error}.  `));
    });
  }
});

/**
* 1) Validate input email - "to" is in proper email format.
* 2) create emailRequest object per Ses requirements.
* 3) Send email.
* 4) If successfully sent - save email msgId to respective Email docs "sentEmails" array.
* 5) Save changes on Email doc.
* 6) Resolve with updated Email doc.
*
* @param {string} to - recipients email address.
* @param {object} emailDoc - Mongo Email collection, Document.
*
* @return {object} - Promise: resolved - updated email doc.
*/
emailSchema.statics.sendEmail = ({ to, htmlBody }, emailDoc) =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.sendEmail\n');

  if (!isEmail(to)) {
    console.log(`FAILED: Send SES Email:"${to}" is not a valid email.  `);
    return reject(new Error(`FAILED: Send SES Email:"${to}" is not a valid email.  `));
  }

  const emailRequest = {
    Destination: {
      ToAddresses: [to],
    },
    Source: emailDoc.replyToAddress,
    ReplyToAddresses: [emailDoc.replyToAddress],
    Message: {
      Body: {
        Html: {
          Data: htmlBody,
          Charset: emailDoc.bodyHtmlCharset,
        },
        Text: {
          Data: emailDoc.bodyTextData,
          Charset: emailDoc.bodyTextCharset,
        },
      },
      Subject: {
        Data: emailDoc.subjectData,
        Charset: emailDoc.subjectCharset,
      },
    },
  };
  console.log('\nSending AWS ses email...');

  return bbPromise
  .fromCallback(cb => ses.sendEmail(emailRequest, cb))
  .then((data) => {
    console.log('SUCCEEDED: Send SES email: \n', data,
    '\nSaving record of email to MONGO Email collection...');

    emailDoc.sentEmails.push({ messageId: data.MessageId });

    return emailDoc.save({ new: true });
  })
  .then((savedEmail) => {
    console.log('SUCCEEDED: Save Message Id in Email Template: ', savedEmail.sentEmails.pop().messageId);
    resolve();
  })
  .catch((error) => {
    console.log('FAILED: Send Email and save Message Id in Email Template: ', error);
    reject(new Error('FAILED: Send Email and save Message Id in Email Template.'));
  });
});

/**
* 1) Find a saved Email Document by querying with input argument "msgId".
* 2a) If not found - send rejected promise with error msg.
* 2b) If found - filter the sent emails list using the id of the sent email.
* 3) Update the sent email's "status" with the input argument "status".
* 4) Save changes & resolve promise with updated email object.
*
* @param {string} msgId - SES messageId value.
* @param {string} status - SES status result.
*
* @return {object} - Promise: resolved - updated email.
*/
emailSchema.statics.findSentEmailAndUpdate = (msgId, status) =>
new Promise((resolve, reject) => { //eslint-disable-line
  console.log('\n\n@Email.findSentEmailAndUpdate\n');

  if (!msgId || !status) {
    reject(new Error(`Missing required arguments. "msgId": ${msgId || 'undefined'}. "status": ${status || 'undefined'}. `));
  } else {
    console.log(`Querying Mongo for Email to update.  "messageId": ${msgId}.  `);

    return Email.findOne({ 'sentEmails.messageId': msgId })
    .exec()
    .then((dbEmail) => {
      if (!dbEmail) {
        console.log('Could not find any Sent emails with MessageId: ', msgId);
        return reject(new Error(`Could not find sent email with id# ${msgId}.`));
      }
      console.log('\nFound Email with MessageID: ', msgId);

      const emailsToSave = dbEmail.sentEmails
      .filter(sent => sent.messageId !== msgId);

      dbEmail.sentEmails = [...emailsToSave, {
        messageId: msgId,
        sesStatus: status,
      }];
      console.log('\nSaving updated Email status...  ');
      return dbEmail.save({ new: true });
    })
    .then((updatedEmail) => {
      console.log('Updated sent emails for Email _id: ', updatedEmail._id);
      return resolve(updatedEmail);
    })
    .catch((error) => {
      console.log(`Query was unsuccessful.  ERROR = ${error}`);
      return reject(new Error(`Query was unsuccessful.  ERROR = ${error}`));
    });
  }
});

/**
* Function: "createInvoiceEmailBody"
* 1. Receives an input object with 4 params.  Destructures this input object and assigns individual values to Email input object.
* 2. Email input object values are distributed by variable name throughout the HTML body taking into account, language, and date of the transaction.
* 3. IF the date of the transaction is during off-business hours, then an Invoice email, NOT containing the Tracking information from Sagwa is generated.  ELSE invoice email, containing Tracking information is generated.
*
* @param {object}
* 1. key {array} cart - { _id, qty } Details of Products purchased.
* 2. key {object} sagawa - {
  sagawaId,
  shippingAddress: {
    givenName, {string}
    familyName, {string}
    email, {string}
    postalCode, {string}
    addressLine1, {string} KANJI
    addressLine2, {string} Romanji or Kanji
    country, {string}
    phoneNumber, {number}
  },}
  3. key {string} language - The language used by the user at purchase time.
  4. key {object} transaction - The Mongo Transaction Doc. generated. See Transaction Schema for details.
*
* @return {string} - Template string of HTML data with dynamic values.
*/
emailSchema.statics.createInvoiceEmailBody = orderInfo =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.createInvoiceEmailBody\n');

  const {
    cart,
    sagawa,
    language,
    transaction,
  } = orderInfo;

  const today = moment().format('dddd');
  const nonBusinessDays = ['Saturday', 'Sunday'];
  let emailType = '';

  if (nonBusinessDays.includes(today)) {
    emailType = 'invoiceEmailNoTracking';
  } else {
    emailType = 'invoiceEmail';
  }

  Email.findEmailAndFilterLanguage(emailType, language)
  .then((dbEmail) => {
    console.log('SUCCEEDED: Find Template Invoice Email for language: ', language);

    const productListHtmlString = CreateEmailProductList(dbEmail, cart);

    const updatedHtmlString = dbEmail.bodyHtmlData
    .replace(/(SHIPPING_STATUS_HERE)+/g, 'Packaging')
    .replace(/(TRANSACTION_ID_HERE)+/g, transaction._id)
    .replace(/(ORDER_PURCHASE_DATE_HERE)+/g, moment().format('YYYY/MM/DD'))
    .replace(/(ORDER_SHIPMENT_DATE_HERE)+/g, sagawa.shippingAddress.shipdate)
    .replace(/(TOTAL_PAID_HERE)+/g, Number(transaction.square.charge.amount).toFixed(2))
    .replace(/(SHIP_FULL_NAME_HERE)+/g, sagawa.shippingAddress.customerName)
    .replace(/(SHIP_ADDRESS_LINE_1_HERE)+/g, sagawa.shippingAddress.jpaddress1)
    .replace(/(SHIP_ADDRESS_LINE_2_HERE)+/g, sagawa.shippingAddress.jpaddress2)
    .replace(/(SHIP_PREFECTURE_HERE)+/g, transaction.square.shippingAddress.shippingPrefecture)
    .replace(/(SHIP_CITY_HERE)+/g, transaction.square.shippingAddress.shippingCity)
    .replace(/(SHIP_POSTAL_CODE_HERE)+/g, sagawa.shippingAddress.postal)
    .replace(/(SHIP_COUNTRY_HERE)+/g, 'Japan')
    .replace(/(SHIP_PHONE_NUMBER_HERE)+/g, sagawa.shippingAddress.phoneNumber)
    .replace(/(BILL_FULL_NAME_HERE)+/g, transaction.square.cardInfo.nameOnCard)
    .replace(/(BILL_POSTAL_CODE_HERE)+/g, transaction.square.cardInfo.postalCode)
    .replace(/(BILL_COUNTRY_HERE)+/g, GetBillingCountry(transaction.square.billingCountry))
    .replace(/(BILL_LAST_4_HERE)+/g, transaction.square.cardInfo.last4)
    .replace(/(INSERT_PRODUCT_LIST_HERE)+/g, productListHtmlString)
    .replace(/(ORDER_SUBTOTAL_HERE)+/g, Number(transaction.total.subTotal).toFixed(2))
    .replace(/(ORDER_TAX_HERE)+/g, transaction.total.taxes)
    .replace(/(ORDER_DISCOUNTS_HERE)+/g, (Number(transaction.total.discount.qtyAmount) + Number(transaction.total.discount.registerAmount)).toFixed(2))
    .replace(/(ORDER_GRAND_TOTAL_HERE)+/g, transaction.total.grandTotal)
    .replace(/(INSERT_COMMENT_HERE)+/g, transaction.comments);

    if (emailType === 'invoiceEmail') {
      transaction.invoiceEmail = updatedHtmlString;
    } else {
      transaction.invoiceEmailNoTracking = updatedHtmlString;
    }

    return Transaction.findByIdAndUpdate(transaction._id, {
      $set: {
        [emailType]: updatedHtmlString,
        sagawa: sagawa._id,
      },
    }, { new: true });
  })
  .then((updatedDoc) => {
    console.log(`SUCCEEDED: Create Invoice Email and save results on Transaction document @ key: "${emailType}".  Updated Doc: `, updatedDoc);

    resolve(updatedDoc);
  })
  .catch((error) => {
    console.log('Could not create invoice email: ', error);
    reject(new Error(`Could not create invoice email: ${error}`));
  });
});
/**
* Function: sendRawEmail
* 1) Validate input email - "to" is in proper email format.
* 2) Check whether the body contains html or text and act according to that.
* 2) create emailRequest object as per SES requirements.
* 3) Send email.
* 4) Resolve with email response.
*
* @param {Object} emailRequest - {
    bccEmailAddresses - {array} of mailIds
    ccEmailAddresses - {array} of mailIds
    toEmailAddresses - {array} of mailIds
    sourceEmail - {string} from mailId (SES verified mailId)
    replyToAddresses - {array} of mailIds
    bodyHtmlData - {string} mail body html
    bodyHtmlCharset - {string} mail body html's charset
    bodyTextData - {string} mail body text
    bodyTextCharset - {string} mail body text's charset
    subjectData - {string} subject data
    subjectCharset - {string} subject data's charset
  } - Email JSON containing all the required SES parameters.
*
* @return {object} - Promise: resolve or reject response.
*/
emailSchema.statics.sendRawEmail = emailRequest =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.sendRawEmail\n');
  let messageBody = {};

  if (!isEmail(emailRequest.toEmailAddresses[0])) {
    console.log(`FAILED: Send SES Email:"${emailRequest.toEmailAddresses[0]}" is not a valid email.  `);
    reject(new Error(`FAILED: Send SES Email:"${emailRequest.toEmailAddresses[0]}" is not a valid email.`));
  } else {
    if (!emailRequest.bodyHtmlData) {
      messageBody = {
        Text: {
          Data: emailRequest.bodyTextData || '',
          Charset: emailRequest.bodyTextCharset || 'utf8',
        },
      };
    } else {
      messageBody = {
        Html: {
          Data: emailRequest.bodyHtmlData || '',
          Charset: emailRequest.bodyHtmlCharset || 'utf8',
        },
        Text: {
          Data: emailRequest.bodyTextData || '',
          Charset: emailRequest.bodyTextCharset || 'utf8',
        },
      };
    }

    const sesEmailRequest = {
      Destination: {
        BccAddresses: emailRequest.bccEmailAddresses || [],
        CcAddresses: emailRequest.ccEmailAddresses || [],
        ToAddresses: emailRequest.toEmailAddresses,
      },
      Source: emailRequest.sourceEmail,
      ReplyToAddresses: emailRequest.replyToAddresses || [],
      Message: {
        Body: messageBody,
        Subject: {
          Data: emailRequest.subjectData || '',
          Charset: emailRequest.subjectCharset || 'utf8',
        },
      },
    };
    console.log('\nSending AWS ses email...');

    bbPromise.fromCallback(cb =>
      ses.sendEmail(sesEmailRequest, cb))
    .then((data) => {
      console.log('SUCCEEDED: Send SES email: \n', data);
      resolve(data);
    })
    .catch((error) => {
      console.log('FAILED: Send SES Email: ', error);
      reject(new Error('FAILED: Send SES Email'));
    });
  }
});
/**
* Function: notifySlack
* 1) Form the slackRequest by using the input message
* 2) Post to slack Webhook.
* 3) Resolve or reject with slack response.
*
* @param {string} slackWebhook - URL of the slack webhook.
* @param {string} message - Message for the slack channel.
*
* @return {object} - Promise: resolve or reject response.
*/
emailSchema.statics.notifySlack = (slackWebhook, message) =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.notifySlack\n');

  // const slackWebhook = process.env.SLACK_WEBHOOK;
  const options = {
    text: message,
  };

  axios.post(slackWebhook, JSON.stringify(options))
  .then((response) => {
    console.log('SUCCEEDED: Sent slack webhook: \n', response.data);
    resolve(response.data);
  })
  .catch((error) => {
    console.log('FAILED: Send slack webhook', error);
    reject(new Error('FAILED: Send slack webhook'));
  });
});

/**
* Function: 'sendEmailReportTostaff'
* Notifiy staff that an important error has occured.
* If there is a failure to send - send a slack notification as a backup.
*
* @param {object} reportInfo - an instance of the Report document.
*
* @return {na}
*/
emailSchema.statics.sendErrorReportToStaff = reportDoc =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.sendErrorReportToStaff\n');

  if (!reportDoc) {
    console.log('Missing required arguments.');
    reject(new Error('Missing required arguments'));
  } else {

    const {
      CEO_EMAIL: ceo,
      CTO_EMAIL: cto,
      CDO_EMAIL: cdo,
    } = process.env;

    const emailRequest = {
      sourceEmail: '',
      toEmailAddresses: [cto, ceo, cdo],
      replyToAddress: ['NJ2JP Error Report ⚠️ <admin@nj2jp.com>'],
      bodyTextData: GenerateEmailBody.staffErrorReport(reportDoc),
      bodyTextCharset: 'utf8',
      subjectData: 'IMPORTANT! - An error has occured that requires your immediate attention.',
      subjectCharset: 'utf8',
    };

  }
});

const Email = db.model('Email', emailSchema);
export default Email;
