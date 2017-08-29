export default function generateSlackMsg(reportDoc) {
  const message = `
--------
ERROR ⚠️ - EXTREMELY IMPORTANT 🛑
--------
An error has occured that requires immediate attention of the development team.
======================= DETAILS =======================
${reportDoc.reduce((a, n) => {
  a += `
TYPE: "${reportDoc.reportType}"
DATE: ${reportDoc.created}

-------------------------------------------------------

`;
}, '')}

`;
}
