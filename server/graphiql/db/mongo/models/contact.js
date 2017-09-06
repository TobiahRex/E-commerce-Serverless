/* eslint-disable no-use-before-define, no-console, consistent-return */
import { Promise as bbPromise } from 'bluebird';
import axios from 'axios';
import contactSchema from '../schemas/contactSchema';
import db from '../connection';
import Email from './email';

/**
* Function: sendSupportMailAndNotifySlack
*
* 1) Construct the emailRequest object for sendRawEmail from user input.
* 2) Invoke sendRawEmail from Email schema.
* 3) Save the document in Contact collection with messageId from sendRawEmail response.
* 4) Invoke notifySlack from Email model.
* 5) Resolves || Rejects with result.
*
* @param {Object} contactForm - {
    name - {string} Name of the customer filing support
    userId - {string} mongo ID of user doc
    message - {string} customer's support message
    emailAddress - {string} customer's mailId
    ccUser - {bool} whether to add user to CC this message
  } - Email JSON containing all the required SES parameters.
*
* @return {object} - Promise: resolve or reject the response.
*/
contactSchema.statics.sendSupportMailAndNotifySlack = contactForm =>
new Promise((resolve) => {
  console.log('\n\n@Contact.sendSupportMailAndNotifySlack\n');

  const contactDocument = {};

  const emailRequest = {
    sourceEmail: 'NJ2JP Contact Us <contact@nj2jp.com>',
    toEmailAddresses: ['support@nj2jp.com'],
    replyToAddresses: [contactForm.emailAddress],
    bodyTextData: contactForm.message,
    bodyTextCharset: 'utf8',
    subjectData: `Customer "${contactForm.name}" requires Support.`,
    subjectCharset: 'utf8',
  };

  if (contactForm.userId) {
    emailRequest.userId = contactForm.userId;
  }
  if (contactForm.ccUser) {
    emailRequest.ccEmailAddresses = [contactForm.emailAddress];
  }

  axios.post(`https://www.google.com/recaptcha/api/siteverify?response=${contactForm.recaptchaToken}&secret=${process.env.RECAPTCHA_SECRET_KEY}`)
  .then((response) => {
    console.log('\nSUCCEEDED: Contact.sendSupportMailAndNotifySlack >>> axios.post: \n1) Status: ', response.status, '\n2) Data: ', response.data);

    if (!response.data.success) {
      resolve({
        error: {
          hard: true,
          soft: false,
          message: '🤔 Wierd. We were not able to validate the Recaptcha. Either you are a bot 🤖  or there was a glitch and we ask you to please try again.  Thanks.',
        },
      });
    } else {
      return Email.sendRawEmail(emailRequest);
    }
  })
  .then((response) => {
    if (response.MessageId) {
      console.log('\nSUCCEEDED: Contact.sendSupportMailAndNotifySlack >>> Email.sendRawEmail:', response);
      contactDocument.messageId = response.MessageId;

      const slackWebhook = process.env.SLACK_SUPPORT_WEBHOOK;
      const slackMessage = `SUPPORT REQUEST: from ${contactForm.emailAddress}. Login as "support@nj2jp.com" @ <https://privateemail.com/appsuite/> to answer their question.`;

      contactDocument.name = contactForm.name;
      contactDocument.emailAddress = contactForm.emailAddress;
      contactDocument.message = contactForm.message;
      if (contactForm.userId) {
        contactDocument.userId = contactForm.userId;
      }

      return Promise.all([
        Email.notifySlack(slackWebhook, slackMessage),
        bbPromise.fromCallback(cb => Contact.create(contactDocument, cb)),
      ]);
    }
  })
  .then((results) => {
    console.log('\nSUCCEEDED: Contact.sendSupportMailAndNotifySlack >>> \n1) Email.notifySlack:', results[0], '\n2) Contact.create: ', results[1]);
    resolve(results[1]);
  })
  .catch((error) => {
    console.log('\nFAILED: Contact.sendSupportMailAndNotifySlack: ', error);
    resolve({
      error: {
        hard: true,
        soft: false,
        message: error.message,
      },
    });
  });
});

const Contact = db.model('Contact', contactSchema);
export default Contact;
