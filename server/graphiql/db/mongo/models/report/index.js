/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import { Promise as bbPromise } from 'bluebird';
import reportSchema from '../../schemas/reportSchema';
import db from '../../connection';

import Email from '../email';

/**
* Function: 'sendErrorReport'
* Purpose is to inform the development staff that an error has occured.  If there is an issue with sending the email report, then as a backup: notify the staff via Slac's error-notifications channel.
*/

reportSchema.statics.createAndSendErrorReport = reportInfo =>
new Promise((resolve, reject) => {
  console.log('\n\n@Report.createAndSendErrorReport\n');

  console.log('arg) reportInfo: ', reportInfo);

  bbPromise.fromCallback(cb => Report.create(reportInfo, cb))
  .then((dbReport) => {
    console.log('\nSUCCEEDED: @Report.createAndSendErrorReport >>> Report.create: ', dbReport._id);

    return Email.sendErrorReportToStaff(dbReport);
  })
  .then(() => {
    console.log('\nSUCCEEDED: @Report.createAndSendErrorReport >>> Email.sendErrorReportToStaff.');
    resolve();
  })
  .catch((error) => {
    console.log('\nFAILED: @Report.createAndSendErrorReport: ', error);
    reject(new Error(error));
  });
});

const Report = db.model('Report', reportSchema);
export default Report;
