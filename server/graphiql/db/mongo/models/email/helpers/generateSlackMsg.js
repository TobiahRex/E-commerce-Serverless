/* eslint-disable indent */

export default function generateSlackMsg(reportDoc) {
  const message = `
----------------------------------------------------
         ⚠️ ERROR - EXTREMELY IMPORTANT 🛑
----------------------------------------------------
    An error has occured that requires immediate
        attention from the development team.
======================= INFO =======================
TYPE: "${reportDoc.reportType}"
DATE: ${reportDoc.created}

====================== DETAILS ======================
${reportDoc.mainTitle}
${reportDoc.subTitle}
-----------------------------------------------------
${reportDoc.headerBlurb}
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
}
