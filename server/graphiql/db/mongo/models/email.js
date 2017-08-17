/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import AWS from 'aws-sdk';
import { Promise as bbPromise } from 'bluebird';
import moment from 'moment';
import isEmail from 'validator/lib/isEmail';
import emailSchema from '../schemas/email';
import config from '../../../config.json';

AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.sesEmailRegion,
});

const ses = new AWS.SES();

export default (db) => {
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
  new Promise((resolve, reject) => {
    if (!msgId || !status) return reject(`Missing required arguments. "msgId": ${msgId || 'undefined'}. "status": ${status || 'undefined'}. `);

    console.log(`Querying Mongo for Email to update.  "messageId": ${msgId}.  `);

    return Email.findOne({ 'sentEmails.messageId': msgId })
    .exec()
    .then((dbEmail) => {
      if (!dbEmail) {
        console.log('Could not find any Sent emails with MessageId: ', msgId);
        return reject(`Could not find sent email with id# ${msgId}.  `);
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
      return reject(`Query was unsuccessful.  ERROR = ${error}`);
    });
  });

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
    const {
      type,
      purpose,
      language,
      subjectData,
      bodyHtmlData,
      bodyTextData,
      replyToAddress,
    } = fields;

    if (!type || !purpose || !language || !replyToAddress || !subjectData || !bodyHtmlData || !bodyTextData) {
      console.log(`Missing required input arguments for "createEmail": Arguments = ${fields}`);
      reject(`Missing required input arguments for "createEmail": Arguments = ${fields}`);
    } else {
      bbPromise.fromCallback(cb => Email.create({ ...fields }, cb))
      .then((newEmail) => {
        console.log('\nSuccessfully created new Email!\n _id: ', newEmail._id);
        resolve(newEmail);
      });
    }
  });

  /**
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
    if (!type || !reqLanguage) {
      console.log(`Missing required arguments. "type": ${type || 'undefined'}. "reqLanguage": ${reqLanguage || 'undefined'}.  `);
      reject(`Missing required arguments. "type": ${type || 'undefined'}. "reqLanguage": ${reqLanguage || 'undefined'}.  `);
    } else {
      Email
      .find({ type })
      .exec()
      .then((dbEmails) => {
        if (!dbEmails) {
          console.log(`Did not find any emails with type: "${type}"`);
          return reject(`Did not find any emails with type: "${type}".  `);
        }
        console.log(`Found the following emails: ${dbEmails}`);

        const foundEmail = dbEmails
        .filter(dbEmail => (dbEmail.type === type) && (dbEmail.language === reqLanguage))[0];

        if (!foundEmail) {
          console.log('Did not successfully filter email results array.');
          return reject('Did not successfully filter email results array.');
        }

        console.log(`Filtered email results: Found "type" = ${foundEmail.type}.  Requested "type" = ${type}.  Found "language" = ${reqLanguage}.  Requested "language" = ${reqLanguage}.  `);

        return resolve(foundEmail);
      })
      .catch((error) => {
        console.log(`Error while trying to find any emails with "type" = ${type}.  ERROR = ${error}`);
        return reject(`Error while trying to find emails with "type" = ${type}.  ERROR = ${error}.  `);
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
  emailSchema.statics.sendEmail = (to, emailDoc) =>
  new Promise((resolve, reject) => {
    if (!isEmail(to)) {
      console.log(`ERROR = "${to}" is not a valid email.  `);
      return reject(`ERROR = "${to}" is not a valid email.  `);
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
            Data: emailDoc.bodyHtmlData,
            Charset: emailDoc.bodyHtmlCharset,
          },
          Text: {
            Data: emailDoc.bodyTextData,
            Charset: emailDoc.bodyTextCharset,
          },
        },
        Subject: {
          Data: `${moment().format('LL')} | ${emailDoc.subjectData}`,
          Charset: emailDoc.subjectCharset,
        },
      },
    };

    console.log('\nSending AWS ses email...');
    return bbPromise
    .fromCallback(cb => ses.sendEmail(emailRequest, cb))
    .then((data) => {
      console.log('\nSuccessfully sent SES email: \n', data,
      '\nSaving record of email to MONGO Email collection...');

      emailDoc.sentEmails.push({ messageId: data.MessageId });

      return emailDoc.save({ new: true });
    })
    .then((savedEmail) => {
      console.log('\nSuccessfully saved Email record to MONGO Email collection: \n', savedEmail.sentEmails.pop().messageId);
      resolve();
    })
    .catch((error) => {
      console.log(`Error sending SES email with type: "${emailDoc.type}".  ERROR = ${error}`);
      reject(`Error sending SES email with type: "${emailDoc.type}".  ERROR = ${error}`);
    });
  });

  const Email = db.model('Email', emailSchema);
  return Email;
};
