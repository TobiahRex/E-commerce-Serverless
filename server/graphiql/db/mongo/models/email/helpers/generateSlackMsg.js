/* eslint-disable indent */
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

    ${reportDoc.reportType !== 'cronJobError' ? this.genericBody(reportDoc.data) : this.cronJobError_body(reportDoc.data)}
    `;
    return message;
  },
  genericBody: (reportData) => {
    const message = reportData.reduce((a, n, i) => {
    a += `
    ${i + 1})----------------
    ${JSON.stringify(n)}
    *-------------------------
    `;
    return a;
    }, '');
    return message;
  },
  cronJobError_body: (reportData) => {
    const message = `
    *--------------------- FAILURES ---------------------*
    ${reportData.failed.reduce((a, n, i) => {
    a += `
    (${i + 1})------------------------
    | DATE: ${n.date}
    | SAGAWA ID: ${n.sagawaId}
    | USER ID: ${n.userId}
    | TRANSACTION ID: ${n.transactionId}
    | VERIFIED: ${n.success}
    *----------------------------
    `;
    return a;
    })}
    *--------------------- SUCCESSFULL ---------------------*
    ${reportData.successful.reduce((a, n, i) => {
    a += `
    (${i + 1})---------------------------
    | DATE: ${n.date}
    | SAGAWA ID: ${n.sagawaId}
    | USER ID: ${n.userId}
    | TRANSACTION ID: ${n.transactionId}
    | VERIFIED: ${n.success}
    *----------------------------
    `;
    return a;
    })}
    `;
    return message;
  },
};

export default generateSlackMsg;
