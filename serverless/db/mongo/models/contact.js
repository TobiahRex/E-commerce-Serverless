/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import contactSchema from '../schemas/contactSchema';

export default (db) => {
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
  contactSchema.statics.sendSupportMailAndNotifySlack = (contactForm, Email) => new Promise((resolve, reject) => {
    console.log('\n\n@Contact.sendSupportMailAndNotifySlack\n');
    const emailRequest = {
      sourceEmail: 'NJ2JP Contact Us <contact@nj2jp.com>',
      toEmailAddresses: ['support@nj2jp.com'],
      replyToAddresses: [contactForm.emailAddress],
      bodyTextData: contactForm.message,
      bodyTextCharset: 'utf8',
      subjectData: `Customer "${contactForm.name}" requires Support.`,
      subjectCharset: 'utf8',
    };

    if (contactForm.ccUser) emailRequest.ccEmailAddresses = [contactForm.emailAddress];
    if (contactForm.userId) emailRequest.userId = contactForm.userId;

    const contactDocument = {};

    Email.sendRawEmail(emailRequest)
    .then((response) => {
      console.log('\nSUCCEEDED: Email has been sent to NJ2JP support:', response);
      contactDocument.messageId = response.MessageId;

      const slackWebhook = process.env.SLACK_SUPPORT_WEBHOOK;
      const slackMessage = `SUPPORT REQUEST: from ${contactForm.emailAddress}. Log into as "support@nj2jp.com" @ <https://privateemail.com/appsuite/> to answer their query.`;
      return Email.notifySlack(slackWebhook, slackMessage);
    })
    .then((slackResponse) => {
      console.log('\nSUCCEEDED: Notification to Slack Customer channel:', slackResponse);

      contactDocument.name = contactForm.name;
      contactDocument.emailAddress = contactForm.emailAddress;
      contactDocument.message = contactForm.message;
      if (contactForm.userId) {
        contactDocument.userId = contactForm.userId;
      }

      return bbPromise.fromCallback(cb => Contact.create(contactDocument, cb));
    })
    .then((contactDoc) => {
      console.log('\nSUCCEEDED: Contact document has been successfully saved:', contactDoc);
      resolve(contactDoc);
    })
    .catch((error) => {
      console.log('\nFAILED: Send Support Mail and Notify Slack ', error);
      reject(new Error('\nFAILED: Send Support Mail and Notify Slack'));
    });
  });


  const Contact = db.model('Contact', contactSchema);
  return Contact;
};
