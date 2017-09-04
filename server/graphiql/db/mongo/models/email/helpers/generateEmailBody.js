/* eslint-disable indent, no-multi-spaces, camelcase */

/**
* Name: 'staffErrorReport'
* Creates a single string that dynamically generates the cron job report data.
*
* @param {object} reportDoc - The db Report document.
*
* @return {string} bodyTextData - The final string to be inserted in the email body.
*/
function staffErrorReport(reportDoc) {
  const bodyTextData = `
  *****************************************************************************
          ${reportDoc.mainTitle} - ${reportDoc.subTitle}
  *--------------------------------------------------------------------------*
      ${reportDoc.headerBlurb}
  *================================== INFO ==================================*
  |
  | TYPE: "${reportDoc.reportType}"
  | DATE: ${reportDoc.created}
  | ${reportDoc.reportType !== 'cronJobError' ? '' : `
  | TOTAL UPLOADS: ${reportDoc.data.total}
  | SUCCESSFUL UPLOADS: ${reportDoc.data.successful}
  | FAILED UPLOADS: ${reportDoc.data.failed}
  | `}
  *================================= DETAILS =================================*

  ${reportDoc.reportType !== 'cronJobError' ? this.genericReport_body(reportDoc.data) : this.cronJob_body(reportDoc.data)}
  *****************************************************************************
  `;
  return bodyTextData;
}

/**
* Name: 'staffGeneralReport'
* Creates a single string that dynamically generates a generalized report data. * Currently used as just a template reference.
*
* @param {object} reportDoc - The db Report document.
*
* @return {string} bodyTextData - The final string to be inserted in the email body.
*/
function staffGeneralReport(reportDoc) {
  const bodyTextData = `
  *****************************************************************************
          ${reportDoc.mainTitle} - ${reportDoc.subTitle}
  *--------------------------------------------------------------------------*
      ${reportDoc.headerBlurb}
  *================================== INFO ==================================*
  |
  | TYPE: "${reportDoc.reportType}"
  | DATE: ${reportDoc.created}
  | ${reportDoc.reportType === 'cronJobEmpty' ? '' : `
  | TOTAL UPLOADS: ${reportDoc.data.total}
  | SUCCESSFUL UPLOADS: ${reportDoc.data.successful}
  | FAILED UPLOADS: ${reportDoc.data.failed}
  | `}
  *================================= DETAILS =================================*

  ${reportDoc.reportType === 'cronJobEmpty' ? 'There are no upload details to show.' : this.cronJob_body(reportDoc.data)}
  *****************************************************************************
  `;
  return bodyTextData;
}

/**
* Name: 'genericReport_body'
* Generates strings for each individual data object that is nested inside the Report doc.
* Renders them as standard objects via JSON.stringify.
* Used only for instances where the data structure is not uniform.
* Currently written here as a reference for more advanced use cases.
*
* @param {array} reportData - The data nested in the db Report document.
*
* @return {string} message
*/
function genericReport_body(reportData) {
  const message = reportData.reports.reduce((a, n, i) => {
  a += `
  ${i + 1})--------------------------------
  ${JSON.stringify(n)}
  *----------------------------------------
  `;
  return a;
  }, '');
  return message;
}

/**
* Name: 'cronJob_body'
* Generates a unique string for each data object for the Cron Job summary report.
*
* @param {array} reportDatq - The array of objects inside the db Report document.
*
* @return {string} message - The final string to be inserted in the email body.
*/
function cronJob_body(reportData) {
  const message = `${reportData.reports.reduce((a, n, i) => {
  a += `
  (${i + 1})------------------------------------------------
  |           ${n.error ? 'FAILED' : 'SUCCESS'}
  | DATE: ${n.date}
  | VERIFIED: ${n.success}
  | USER ID: ${n.userId}
  | SAGAWA ID: ${n.sagawaId}
  | TRANSACTION ID: ${n.transactionId}
  *----------------------------------------------------
  `;
  return a;
  }, '')}`;
  return message;
}

export default ({
  staffErrorReport,
  staffGeneralReport,
  genericReport_body,
  cronJob_body,
});
