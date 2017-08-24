/* eslint-disable no-console */
import { create } from 'apisauce';
import xml2js from 'xml2js';

const createSagawaTrackingAPI = () => {
  const api = create({
    baseURL: 'https://tracking.sagawa-sgx.com/sgx',
    credentials: 'omit',
    headers: {
      'Content-Type': 'text/html,application/xhtml+xml',
      // SOAPAction: 'http://ws.com',
    },
  });

  const getStatus = trackingNumber => api.get(`xmltrack.asp?AWB=${trackingNumber}`);

  return {
    getStatus,
  };
};
const sagawaTrackingAPI = createSagawaTrackingAPI();

sagawaTrackingAPI.getStatus('NJ2JP201708200001')
.then((response) => {
  const { problem, ok, data } = response;
  console.log('RESPONSE:\n', response, '\n\n');
  if (problem) {
    console.log('\nERROR: ', problem);
    xml2js.parseString(data, (err, results) => {
      if (err) console.log('PARSE ERROR: \n', err);
      console.log('PARSE OK: \n', JSON.stringify(results, null, 2));
    });
  }
  if (ok) {
    xml2js.parseString(data, (err, results) => {
      if (err) console.log('PARSE ERROR: \n', err);
      console.log('PARSE OK: \n', JSON.stringify(results, null, 2));
    });
  }
});

//  {
//   "TRACK": {
    // "INFO": [
    //   {
//         "AWB": [
//           ""
//         ],
//         "REF": [
//           ""
//         ],
//         "ORIGIN": [
//           ""
//         ],
//         "DEST": [
//           ""
//         ],
//         "LCLDATE": [
//           "20170819"
//         ],
//         "LCLTIME": [
//           "0554"
//         ],
//         "STATUS": [
//           "TA"
//         ],
//         "DETAIL": [
//           "ARRIVED AT TRANSIT POINT"
//         ],
//         "COUNTRY": [
//           "LOS ANGELES,U.S.A"
//         ],
//         "SVC": [
//           ""
//         ],
//         "LINKURL": [
//           ""
//         ],
//         "LCLNBR": [
//           ""
//         ]
//       }
//     ],
//     "LCLINFO": [
//       {
//         "AWB": [
//           ""
//         ],
//         "REF": [
//           ""
//         ],
//         "ORIGIN": [
//           ""
//         ],
//         "DEST": [
//           ""
//         ],
//         "LCLDATE": [
//           ""
//         ],
//         "LCLTIME": [
//           ""
//         ],
//         "STATUS": [
//           ""
//         ],
//         "DETAIL": [
//           ""
//         ],
//         "COUNTRY": [
//           ""
//         ],
//         "SVC": [
//           ""
//         ],
//         "LINKURL": [
//           ""
//         ],
//         "LCLNBR": [
//           ""
//         ]
//       }
//     ]
//   }
// }
