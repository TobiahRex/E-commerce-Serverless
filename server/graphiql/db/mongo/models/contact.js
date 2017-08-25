/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import contactSchema from '../schemas/contactSchema';
import db from '../connection';
import Email from './email';
/**
* Function: sendSupportMailAndNotifySlack
*
* 1) Invoke sendRawEmail from Email schema.
* 2) Save the document in Contact collection with messageId from sendRawEmail response.
* 3) Invoke notifySlack from Email model.
* 4) Resolves || Rejects with result.
*
* @param {Object} emailRequest - {
    name - Name of the customer filing support
    userId - mongo ID of user doc
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
* @return {object} - Promise: resolve or reject the response.
*/
contactSchema.statics.sendSupportMailAndNotifySlack = emailRequest =>
new Promise((resolve, reject) => {
  console.log('\n\n@Contact.sendSupportMailAndNotifySlack\n');
  let contactDocument = {};
  let slackWebhook = '';
  let slackMessage = '';

  Email.sendRawEmail(emailRequest)
  .then((response) => {
    console.log('SUCCEEDED: Email has been sent to NJ2JP support:', response);
    contactDocument.messageId = response.messageId;

    slackWebhook = process.env.SLACK_CUSTOMER_WEBHOOK;
    slackMessage = 'We have got a customer support from ' + emailRequest.replyToAddresses[0] + ' Log into <https://privateemail.com/appsuite/> to answer their query.'
    return Email.notifySlack(slackWebhook, slackMessage);
  })
  .then((slackResponse) => {
    console.log('SUCCEEDED: Notification to Slack Customer channel:', slackResponse);

    contactDocument.name = emailRequest.name;
    contactDocument.emailAddress = emailRequest.replyToAddresses[0];
    contactDocument.message = emailRequest.bodyTextData;
    if (emailRequest.userId) {
      contactDocument.user = emailRequest.userId;
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
