/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import { Promise as bbPromise } from 'bluebird';
import reportSchema from '../../schemas/reportSchema';
import db from '../../connection';
import Email from '../email';
import {
  generateSlackMsg as GenerateSlackMsg,
} from '../email/helpers';

reportSchema.statics.createAndSendCronJobReportToStaff = reportBody =>
new Promise((resolve, reject) => {
  console.log('\n\n@Report.createAndSendCronJobReportToStafff\n');

  bbPromise.fromCallback(cb => Report.create(reportBody, cb))
  .then((dbReport) => {
    console.log('\nSUCCEEDED: Report.createAndSendCronJobReportToStafff >>> Report.create: ', dbReport._id);

    return Promise.all([
      Email.sendReportToStaff(dbReport),
      Email.notifySlack(
        process.env.SLACK_GENERAL_NOTIFICATION_WEBHOOK,
        GenerateSlackMsg.staffGeneralReport(dbReport),
      ),
    ]);
  })
  .then((results) => {
    console.log('\nSUCCEEDED: Report.createAndSendCronJobReportToStafff >>> 1) Email.sendReportToStaff & 2) Email.notifySlack: n', results);
    resolve();
  })
  .catch((error) => {
    console.log('\nFAILED: Report.createAndSendCronJobReportToStafff: ', error);
    reject(error.message);
  });
});

/**
* Function: 'sendErrorReport'
* Purpose is to inform the development staff that an error has occured.  If there is an issue with sending the email report, then as a backup: notify the staff via Slac's error-notifications channel.
*/
reportSchema.statics.createAndSendErrorReportToStaff = reportInfo =>
new Promise((resolve, reject) => {
  console.log('\n\n@Report.createAndSendErrorReportToStaff\n');

  console.log('arg) reportInfo: ', reportInfo);

  bbPromise.fromCallback(cb => Report.create(reportInfo, cb))
  .then((dbReport) => {
    console.log('\nSUCCEEDED: @Report.createAndSendErrorReportToStaff >>> Report.create: ', dbReport._id);

    return Promise.all([
      Email.sendErrorReportToStaff(dbReport),
      Email.notifySlack(
        process.env.SLACK_ERROR_NOTIFICATION_WEBHOOK,
        GenerateSlackMsg.staffErrorReport(dbReport),
      ),
    ]);
  })
  .then(() => {
    console.log('\nSUCCEEDED: @Report.createAndSendErrorReportToStaff >>> Email.sendErrorReportToStaff.');
    resolve();
  })
  .catch((error) => {
    console.log('\nFAILED: @Report.createAndSendErrorReportToStaff: ', error);
    reject(new Error(error));
  });
});

const Report = db.model('Report', reportSchema);
export default Report;
