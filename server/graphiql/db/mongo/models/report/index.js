/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import { Promise as bbPromise } from 'bluebird';
import reportSchema from '../../schemas/reportSchema';
import db from '../../connection';

import Email from '../email';

/**
* Function: 'sendErrorReport'
* Purpose is to inform the development staff that an error has occured.  If there is an issue with sending the email report, then as a backup: notify the staff via Slac's error-notifications channel.
*/

reportSchema.statics.sendErrorReport = reportInfo =>
new Promise((resolve, reject) => {
  console.log('\n\n@Report.sendError\n');

  console.log('arg) reportInfo: ', reportInfo);

  bbPromise.fromCallback(cb => Report.create(reportInfo, cb))
  .then((dbReport) => {
    console.log('\nSUCCEEDED: Create new Report document: ', dbReport._id);

    return Email.sendErrorToStaff(dbReport);
  })
  .then(() => {
    console.log('SUCCEEDED: Sent error report to Staff.');
    resolve();
  })
  .catch((error) => {
    console.log('FAILED: Create new Report and Send Email notification.');
    reject(new Error(error));
  });
});

const Report = db.model('Report', reportSchema);
export default Report;
