import { Promise as bbPromise } from 'bluebird';
import reportSchema from '../../schemas/reportSchema';
import db from '../../connection';

/**
* Function: 'sendErrorReport'
* Purpose is to inform the development staff that an error has occured.  If there is an issue with sending the email report, then as a backup: notify the staff via Slac's error-notifications channel.
*/

reportSchema.statics.sendErrorReport = (reportInfo) =>
new Promise((resolve, reject) => {
  console.log('\n\n@Report.sendError');
});

const Report = db.model('Report', reportSchema);
export default Report;
