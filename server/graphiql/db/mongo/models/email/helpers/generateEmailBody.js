/* eslint-disable indent */
const generateEmailBody = {
  staffErrorReport: (reportDoc) => {
    const bodyTextData = `
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

    ${reportDoc.reportType !== 'cronJobError' ? this.genericReport_body(reportDoc.data) : this.staffErrorReport_body(reportDoc.data)}
    `;
    return bodyTextData;
  },
  staffGeneralReport: (reportDoc) => {
    const bodyTextData = `
    *----------------------------------------------------*
            ${reportDoc.mainTitle} - ${reportDoc.subTitle}
    *----------------------------------------------------*
        ${reportDoc.headerBlurb}
    *======================= INFO =======================*
    |
    | TYPE: "${reportDoc.reportType}"
    | DATE: ${reportDoc.created}
    | ${reportDoc.reportType !== 'cronJobSummary' ? '' : `
    | TOTAL UPLOADS: ${reportDoc.data.total || 0}
    | SUCCESSFUL UPLOADS: ${reportDoc.data.successful}
    | FAILED UPLOADS: ${reportDoc.data.failed}
    | `}
    *====================== DETAILS ======================*

    ${reportDoc.reportType !== 'cronJobError' ? this.genericReport_body(reportDoc.data.reports) : this.staffErrorReport_body(reportDoc.data.reports)}
    `;
    return bodyTextData;
  },
  genericReport_body: (reportsArr) => {
    const message = reportsArr.reduce((a, n, i) => {
    a += `
    ${i + 1})----------------
    ${JSON.stringify(n)}
    *-------------------------
    `;
    return a;
    }, '');
    return message;
  },
  staffErrorReport_Body: (reportsArr) => {
    const message = `
    *--------------------- FAILURES ---------------------*
    ${reportsArr.failed.reduce((a, n, i) => {
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
    ${reportsArr.successful.reduce((a, n, i) => {
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

export default generateEmailBody;
