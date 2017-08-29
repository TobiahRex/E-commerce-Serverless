/* eslint-disable indent */
const generateEmailBody = {
  staffErrorReport: (reportDoc) => {
    const bodyTextData = `
    ----------------------------------------------------
            ${reportDoc.mainTitle} - ${reportDoc.subTitle}
    ----------------------------------------------------
        ${reportDoc.headerBlurb}
    ======================= INFO =======================

    TYPE: "${reportDoc.reportType}"
    DATE: ${reportDoc.created}

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
    return bodyTextData;
  },
};

export default generateEmailBody;
