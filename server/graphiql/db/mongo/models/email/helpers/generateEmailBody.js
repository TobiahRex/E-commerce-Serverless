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

    ${reportDoc.reportType !== 'cronJobError' ? reportDoc.data.reduce((a, n, i) => {
      a += `
    ${i + 1})----------------
    |${JSON.stringify(n)}
    *-------------------------
    `;
      return a;
    }, '')
  : this.cronJobErrorBody(reportDoc.data)}
    `;
    return bodyTextData;
  },
  cronJobErrorBody: (reportData) => {
    const message = `
    *--------------------- FAILURES ---------------------*
    ${reportData.failed.reduce((a, n, i) => {
    a += `
    ${i + 1})-------------------------
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
    ${i + 1})----------------------------
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
