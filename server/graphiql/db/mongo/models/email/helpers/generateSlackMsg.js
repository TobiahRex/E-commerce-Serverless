/* eslint-disable indent, no-multi-spaces, camelcase */

function staffErrorReport(reportDoc) {
  const message = `
  *---------------------------------------------------------------------------*
          ${reportDoc.mainTitle} - ${reportDoc.subTitle}
  *---------------------------------------------------------------------------*
      ${reportDoc.headerBlurb}
  *================================== INFO ===================================*
  |
  | TYPE: "${reportDoc.reportType}"
  | DATE: ${reportDoc.created}
  | ${reportDoc.reportType !== 'cronJobError' ? '' : `
  | TOTAL UPLOADS: ${reportDoc.data.total}
  | SUCCESSFUL UPLOADS: ${reportDoc.data.successful}
  | FAILED UPLOADS: ${reportDoc.data.failed}
  | `}
  *================================ DETAILS ==================================*

  ${reportDoc.reportType !== 'cronJobError' ? genericReport_body(reportDoc.data) : cronJob_body(reportDoc.data)}
  `;
  return message;
}

function staffGeneralReport(reportDoc) {
  const message = `
  *---------------------------------------------------------------------------*
          ${reportDoc.mainTitle} - ${reportDoc.subTitle}
  *---------------------------------------------------------------------------*
      ${reportDoc.headerBlurb}
  *================================== INFO ===================================*
  |
  | TYPE: "${reportDoc.reportType}"
  | DATE: ${reportDoc.created}
  | ${reportDoc.reportType === 'cronJobEmpty' ? '' : `
  | TOTAL UPLOADS: ${reportDoc.data.total}
  | SUCCESSFUL UPLOADS: ${reportDoc.data.successful}
  | FAILED UPLOADS: ${reportDoc.data.failed}
  | `}
  *================================== DETAILS =================================*

  ${reportDoc.reportType === 'cronJobEmpty' ? 'There are no upload details to show.' : cronJob_body(reportDoc.data)}
  `;
  return message;
}

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

function cronJob_body(reportData) {
  const message = `${reportData.reports.reduce((a, n, i) => {
  a += `
  (${i + 1})------------------------------------------------
  |           ${n.error ? 'FAILED' : 'SUCCESS'}
  | DATE: ${n.date}
  | SAGAWA ID: ${n.sagawaId}
  | USER ID: ${n.userId}
  | TRANSACTION ID: ${n.transactionId}
  | VERIFIED: ${n.success}
  *----------------------------------------------------=
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
