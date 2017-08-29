/* eslint-disable indent */
const generateSlackMsg = {
  staffErrorReport: (reportDoc) => {
    const message = `
    ----------------------------------------------------
            ${reportDoc.mainTitle} - ${reportDoc.subTitle}
    ----------------------------------------------------
        ${reportDoc.headerBlurb}
    ======================= INFO =======================

    TYPE: "${reportDoc.reportType}"
    DATE: ${reportDoc.created}
    ${reportDoc.reportType !== 'cronJobError' ? '' : `
    TOTAL UPLOADS: ${reportDoc.data.total}
    SUCCESSFUL UPLOADS: ${reportDoc.data.successful}
    FAILED UPLOADS: ${reportDoc.data.failed}
    `}
    ====================== DETAILS ======================

    ${reportDoc.data.reduce((a, n, i) => {
      a += `
    /${i + 1})----------------
    /${JSON.stringify(n)}
    /-------------------------
    `;
      return a;
    }, '')}
    `;
    return message;
  },
};

export default generateSlackMsg;
