/* eslint-disable no-use-before-define, no-console, import/newline-after-import, consistent-return */
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
  generateSlackMsg as GenerateSlackMsg,
  getCurrencyType as GetCurrencyType,
  getRefundAmount as GetRefundAmount,
} from './helpers';
// import Transaction from '../transaction';
// import User from '../user';

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
    reject(`Missing required arguments. "type": ${type || 'undefined'}. "reqLanguage": ${reqLanguage || 'undefined'}.  `);
  } else {
    Email
    .find({ type })
    .exec()
    .then((dbEmails) => {
      if (!dbEmails.length) {
        console.log('\nFAILED: Email.findEmailAndFilterLanguage: ', type);
        reject('\nFAILED: Email.findEmailAndFilterLanguage');
      } else {
        console.log('\nSUCCEEDED: Email.findEmailAndFilterLanguage');

        const foundEmail = dbEmails.filter(dbEmail =>
          (dbEmail.type === type) && (dbEmail.language === reqLanguage),
        )[0];

        if (!foundEmail) {
          console.log('\nFAILED: Email.findEmailAndFilterLanguage >>> Email.find.');
          reject('\nFAILED: Email.findEmailAndFilterLanguage >>> Email.find.');
        } else {
          console.log(`Filtered email results: Found "type" = ${foundEmail.type}.  Requested "type" = ${type}.  Found "language" = ${reqLanguage}.  Requested "language" = ${reqLanguage}.  `);
          resolve(foundEmail);
        }
      }
    })
    .catch((error) => {
      console.log('\nFAILED: Email.findEmailAndFilterLanguage: ', error);
      reject('\nFAILED: Email.findEmailAndFilterLanguage');
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
    reject(`FAILED: Send SES Email:"${to}" is not a valid email.  `);
  } else {
    let ToAddresses;
    if (Array.isArray(to)) ToAddresses = [...to];
    else ToAddresses = [to];

    const emailRequest = {
      Destination: {
        ToAddresses,
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
    return bbPromise
    .fromCallback(cb => ses.sendEmail(emailRequest, cb))
    .then((data) => {
      console.log('\nSUCCEEDED: Send SES email: \n', data,
      '\nSaving record of email to MONGO Email collection...');

      emailDoc.sentEmails.push({ messageId: data.MessageId });

      return emailDoc.save({ new: true });
    })
    .then((savedEmail) => {
      console.log('\nSUCCEEDED: Save Message Id in Email Template: ', savedEmail.sentEmails.pop().messageId);
      resolve();
    })
    .catch((error) => {
      console.log('\nFAILED: Send Email and save Message Id in Email Template: ', error);
      reject('\nFAILED: Send Email and save Message Id in Email Template.');
    });
  }
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
    console.log(`Missing required arguments. "msgId": ${msgId || 'undefined'}. "status": ${status || 'undefined'}. `);
    reject(`Missing required arguments. "msgId": ${msgId || 'undefined'}. "status": ${status || 'undefined'}. `);
  } else {
    Email.findOne({ 'sentEmails.messageId': msgId })
    .exec()
    .then((dbEmail) => {
      if (!dbEmail) {
        console.log('Could not find any Sent emails with MessageId: ', msgId);
        reject(`Could not find sent email with id# ${msgId}.`);
      } else {
        console.log('\nFound Email with MessageID: ', msgId);

        const emailsToSave = dbEmail.sentEmails.filter(sent => sent.messageId !== msgId);

        dbEmail.sentEmails = [...emailsToSave, {
          messageId: msgId,
          sesStatus: status,
        }];
        return dbEmail.save({ validateBeforeSave: true });
      }
    })
    .then((updatedEmail) => {
      console.log('Updated sent emails for Email _id: ', updatedEmail._id);
      resolve(updatedEmail);
    })
    .catch((error) => {
      console.log(`Query was unsuccessful.  ERROR = ${error}`);
      reject(`Query was unsuccessful.  ERROR = ${error}`);
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
    console.log('\nSUCCEEDED: Find Template Invoice Email for language: ', language);

    const productListHtmlString = CreateEmailProductList(dbEmail, cart);

    const updatedHtmlString = dbEmail.bodyHtmlData
    .replace(/(SHIPPING_STATUS_HERE)+/g, 'Packaging')
    .replace(/(TRANSACTION_ID_HERE)+/g, transaction._id)
    .replace(/(ORDER_PURCHASE_DATE_HERE)+/g, moment().format('YYYY/MM/DD'))
    .replace(/(ORDER_SHIPMENT_DATE_HERE)+/g, sagawa.shippingAddress.shipdate)
    .replace(/(CURRENCY_TYPE_HERE)+/g, GetCurrencyType(transaction.square.tender.amount_money.currency))
    .replace(/(TOTAL_PAID_HERE)+/g, `${String(transaction.square.tender.amount_money.amount).slice(0, 2)}.${String(transaction.square.tender.amount_money.amount).slice(2, 4)}`)
    .replace(/(SHIP_FULL_NAME_HERE)+/g, sagawa.shippingAddress.customerName)
    .replace(/(SHIP_ADDRESS_LINE_1_HERE)+/g, sagawa.shippingAddress.jpaddress1)
    .replace(/(SHIP_ADDRESS_LINE_2_HERE)+/g, sagawa.shippingAddress.jpaddress2)
    .replace(/(SHIP_PREFECTURE_HERE)+/g, transaction.square.shippingAddress.shippingPrefecture)
    .replace(/(SHIP_CITY_HERE)+/g, transaction.square.shippingAddress.shippingCity)
    .replace(/(SHIP_POSTAL_CODE_HERE)+/g, sagawa.shippingAddress.postal)
    .replace(/(SHIP_COUNTRY_HERE)+/g, 'Japan')
    .replace(/(SHIP_PHONE_NUMBER_HERE)+/g, sagawa.shippingAddress.phoneNumber)
    .replace(/(BILL_FULL_NAME_HERE)+/g, transaction.square.tender.card_details.card.nameOnCard)
    .replace(/(BILL_POSTAL_CODE_HERE)+/g, transaction.square.tender.card_details.card.postalCode)
    .replace(/(BILL_COUNTRY_HERE)+/g, GetBillingCountry(transaction.square.billingCountry))
    .replace(/(BILL_LAST_4_HERE)+/g, transaction.square.tender.card_details.card.last_4)
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
    console.log(`FAILED: @Email.sendRawEmail: Send SES Email:"${emailRequest.toEmailAddresses[0]}" is not a valid email.  `);
    reject(`FAILED: @Email.sendRawEmail: Send SES Email:"${emailRequest.toEmailAddresses[0]}" is not a valid email.`);
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
    bbPromise.fromCallback(cb =>
      ses.sendEmail(sesEmailRequest, cb))
    .then((data) => {
      console.log('\nSUCCEEDED: @Email.sendRawEmail >>> ses.SendEmail: \n', data);
      resolve(data);
    })
    .catch((error) => {
      console.log('\nFAILED: @Email.sendRawEmail: ', error);
      reject('\nFAILED: @Email.sendRawEmail:');
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
    console.log('\nSUCCEEDED: Email.notifySlack: \n', response.data);
    resolve(response.data);
  })
  .catch((error) => {
    console.log('\nFAILED: Email.notifySlack', error);
    reject('\nFAILED: Email.notifySlack');
  });
});

/**
* Function: 'sendErrorReportToStaff'
* Notify the staff of an error via a Report template.  Currently this is only being invoked for a failure detected in the Cron Job upload.
*
* @param {object} reportInfo - an instance of the Report document.
*
* @return {na}
*/
emailSchema.statics.sendErrorReportToStaff = dbReport =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.sendErrorReportToStaff\n');

  if (!dbReport) {
    console.log('Missing required arguments.');
    reject('Missing required arguments');
  } else {
    const {
      CEO_EMAIL: ceo,
      CTO_EMAIL: cto,
      CDO_EMAIL: cdo,
    } = process.env;

    const emailRequest = {
      sourceEmail: 'admin@nj2jp.com',
      toEmailAddresses: [cto, ceo, cdo],
      replyToAddress: ['NJ2JP Error Report ⚠️ <admin@nj2jp.com>'],
      bodyTextData: GenerateEmailBody.staffErrorReport(dbReport),
      bodyTextCharset: 'utf8',
      subjectData: 'IMPORTANT! - An error has occured that requires immediate attention.',
      subjectCharset: 'utf8',
    };

    Email.sendRawEmail(emailRequest)
    .then((response) => {
      console.log('\nSUCCEEDED: Send Error Email to Staff: ', response);

      resolve();
    })
    .catch((error) => {
      console.log('\nFAILED: @Email.sendErrorReportToStaff: ', error);

      return Email.notifySlack(
        process.env.SLACK_ERROR_NOTIFICATION_WEBHOOK,
        GenerateSlackMsg.staffErrorReport(dbReport),
      );
    })
    .then(() => {
      console.log('\nSUCCEEDED: @Email.notifiySlack');

      reject('\nFAILED @Email.sendRawEmail');
    })
    .catch(reject);
  }
});

/**
* Function: 'sendReportToStaff'
* Notify all the staff of a report - Currently the only report being generated and distributed is the Cron Job report.
*
* @param {object} dbReport - the saved Report doc containing the report details.
*
* @return {na}
*/
emailSchema.statics.sendReportToStaff = dbReport =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.sendReportToStaff\n');
  console.log('dbReport: ', dbReport);
  if (!dbReport) {
    console.log('Missing required arguments.');
    reject('Missing required arguments');
  } else {
    const {
      CEO_EMAIL: ceo,
      CTO_EMAIL: cto,
      CDO_EMAIL: cdo,
    } = process.env;

    const emailRequest = {
      sourceEmail: 'NJ2JP <admin@nj2jp.com>',
      toEmailAddresses: [cto, ceo, cdo],
      replyToAddress: [`${dbReport.mainTitle} <admin@nj2jp.com>`],
      bodyTextData: GenerateEmailBody.staffGeneralReport(dbReport),
      bodyTextCharset: 'utf8',
      subjectData: dbReport.subTitle,
      subjectCharset: 'utf8',
    };

    Email.sendRawEmail(emailRequest)
    .then(resolve)
    .catch((error) => {
      console.log('\nFAILED: @Email.sendReportToStaff: ', error);
      reject(error.message);
    })
    .catch(reject);
  }
});

/**
* Function: 'refundNotification'
* Notify staff that a refund has taken place either autmocatically or on demand.
* Notify customer that they have been issued a refund.
*
* @param {object} reqBody - 1) email message, 2) userId, 3) sagawaId, 4) transactionId
*
* @return {na}
*/
emailSchema.statics.refundNotification = reqBody =>
new Promise((resolve, reject) => {
  console.log('\n\n@Email.refundNotification\n');

  const {
    userId,
    message,
    sagawaId,
    transactionId,
  } = reqBody;

  if (!userId) {
    console.log('\nFAILED: Email.sendRefundIssued > missing required argument');
    reject('\nFAILED: Email.sendRefundIssued > missing required argument');
  } else {
    User
    .findById(userId)
    .deepPopulate('shopping.transactions')
    .then((dbUser) => {
      if (!dbUser) {
        console.log('\nFAILED: Email.sendRefundIssued > Unable to find User.');
        reject('\nFAILED: Email.sendRefundIssued > Unable to find User.');
      } else {
        const dbTransaction = dbUser.shopping.transactions.filter(({ sagawa }) => sagawaId !== sagawa)[0];

        let promises = [],
          slackMsg = '';
        const {
          CEO_EMAIL: ceo,
          CTO_EMAIL: cto,
          CDO_EMAIL: cdo,
        } = process.env;

        promises = Object.keys(message).map((key) => {
          let toEmailAddresses;
          /* eslint-disable prefer-const */
          let {
            body,
            subject,
            replyTo,
          } = message[key];
          /* eslint-enable prefer-const */
          const { amount, currency } = GetRefundAmount(dbTransaction);

          body = body
          .replace(/USER_NAME_HERE/g, `${dbUser.name.first} ${dbUser.name.last}`)
          .replace(/CURRENCY_TYPE_HERE/g, currency)
          .replace(/REFUND_AMOUNT_HERE/g, amount)
          .replace(/LAST_4_HERE/g, dbTransaction.square.tender.card_details.card.last_4)
          .replace(/USER_EMAIL_HERE/g, dbUser.contactInfo.email)
          .replace(/REFERENCE_ID_HERE/g, transactionId);

          if (key === 'user') toEmailAddresses = [dbUser.contactInfo.email];
          if (key === 'staff') {
            slackMsg = body;
            toEmailAddresses = [cto, ceo, cdo];
          }

          const promise = Email.sendRawEmail({
            sourceEmail: 'NJ2JP Error <admin@nj2jp.com>',
            toEmailAddresses,
            replyToAddress: [replyTo],
            bodyTextData: body,
            bodyTextCharset: 'utf8',
            subjectData: subject,
            subjectCharset: 'utf8',
          });
          return promise;
        });

        return Promise.all([
          ...promises,
          Email.notifySlack(
            process.env.SLACK_ERROR_NOTIFICATION_WEBHOOK,
            slackMsg,
          ),
        ]);
      }
    })
    .then((results) => {
      console.log('\nSUCCEEDED: Email.refundNotification >>> \n1)Send emails to respective party(ies): ', results[0], '\n2)Send Slack notification - "error_notifications": ', results[1]);
      resolve();
    })
    .catch((error) => {
      console.log('\nFAILED: Email.refundNotification: ', error);
      reject('\nFAILED: Email.refundNotification: ', error);
    });
  }
});


const Email = db.model('Email', emailSchema);
export default Email;
