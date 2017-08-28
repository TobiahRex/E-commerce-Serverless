/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
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
new Promise((resolve, reject) => {
  console.log('\n\n@Contact.sendSupportMailAndNotifySlack\n');
  let emailRequest = {
    sourceEmail: 'NJ2JP Contact Us <contact@nj2jp.com>',
    toEmailAddresses: ['support@nj2jp.com'],
    replyToAddresses: [contactForm.emailAddress],
    bodyTextData: contactForm.message,
    bodyTextCharset: 'utf8',
    subjectData: `Customer "${contactForm.name}" requires Support.`,
    subjectCharset: 'utf8'
  };

  if (contactForm.ccUser) {
    emailRequest.ccEmailAddresses = [contactForm.emailAddress];
  }

  if (contactForm.userId) {
    emailRequest.userId = contactForm.userId;
  }

  let contactDocument = {};
  let slackWebhook = '';
  let slackMessage = '';

  Email.sendRawEmail(emailRequest)
  .then((response) => {
    console.log('SUCCEEDED: Email has been sent to NJ2JP support:', response);
    contactDocument.messageId = response.MessageId;

    slackWebhook = process.env.SLACK_CUSTOMER_WEBHOOK;
    slackMessage = `SUPPORT REQUESTED: from ${contactForm.emailAddress}. Log into <https://privateemail.com/appsuite/> to answer their query.`
    return Email.notifySlack(slackWebhook, slackMessage);
  })
  .then((slackResponse) => {
    console.log('SUCCEEDED: Notification to Slack Customer channel:', slackResponse);

    contactDocument.name = contactForm.name;
    contactDocument.emailAddress = contactForm.emailAddress;
    contactDocument.message = contactForm.message;
    if (contactForm.userId) {
      contactDocument.userId = contactForm.userId;
    }

    return bbPromise.fromCallback(cb => Contact.create(contactDocument, cb));
  })
  .then((contactDoc) => {
    console.log('SUCCEEDED: Contact document has been successfully saved:', contactDoc);
    resolve(contactDoc);
  })
  .catch((error) => {
    console.log('FAILED: Send Support Mail and Notify Slack ', error);
    reject(new Error('FAILED: Send Support Mail and Notify Slack'));
  });
});

const Contact = db.model('Contact', contactSchema);
export default Contact;
