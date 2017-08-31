/* eslint-disable indent, no-multi-spaces */
const generateSlackMsg = {
  staffErrorReport: (reportDoc) => {
    const message = `
    *----------------------------------------------------*
            ${reportDoc.mainTitle} - ${reportDoc.subTitle}
    *----------------------------------------------------*
        ${reportDoc.headerBlurb}
    *======================= INFO =======================*
    |
    | TYPE: "${reportDoc.reportType}"
    | DATE: ${reportDoc.created}
    | ${reportDoc.reportType !== 'cronJobError' ? '' : `
    | TOTAL UPLOADS: ${reportDoc.data.total}
    | SUCCESSFUL UPLOADS: ${reportDoc.data.successful}
    | FAILED UPLOADS: ${reportDoc.data.failed}
    | `}
    *====================== DETAILS ======================*

    ${reportDoc.reportType !== 'cronJobError' ? this.genericReport_body(reportDoc.data) : this.cronJob_body(reportDoc.data)}
    `;
    return message;
  },
  staffGeneralReport: (reportDoc) => {
    const message = `
    *----------------------------------------------------*
            ${reportDoc.mainTitle} - ${reportDoc.subTitle}
    *----------------------------------------------------*
        ${reportDoc.headerBlurb}
    *======================= INFO =======================*
    |
    | TYPE: "${reportDoc.reportType}"
    | DATE: ${reportDoc.created}
    | ${reportDoc.reportType === 'cronJobEmpty' ? '' : `
    | TOTAL UPLOADS: ${reportDoc.data.total}
    | SUCCESSFUL UPLOADS: ${reportDoc.data.successful}
    | FAILED UPLOADS: ${reportDoc.data.failed}
    | `}
    *====================== DETAILS ======================*

    ${reportDoc.reportType === 'cronJobEmpty' ? 'There are no upload details to show.' : this.cronJob_body(reportDoc.data)}
    `;
    return message;
  },
  genericReport_body: (reportData) => {
    const message = reportData.reports.reduce((a, n, i) => {
    a += `
    ${i + 1})----------------
    ${JSON.stringify(n)}
    *-------------------------
    `;
    return a;
    }, '');
    return message;
  },
  cronJob_body: (reportData) => {
    const message = `
    ${reportData.reports.reduce((a, n, i) => {
    a += `
    (${i + 1})------------------------
    |           ${n.error ? 'FAILED' : 'SUCCESS'}
    | DATE: ${n.date}
    | SAGAWA ID: ${n.sagawaId}
    | USER ID: ${n.userId}
    | TRANSACTION ID: ${n.transactionId}
    | VERIFIED: ${n.success}
    *----------------------------
    `;
    return a;
    })}`;
    return message;
  },
};

export default generateSlackMsg;
