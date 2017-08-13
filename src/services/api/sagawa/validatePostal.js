/* eslint-disable no-console */
import { create } from 'apisauce';
// import xml2js from 'xml2js';

/**
* Function: "xmlOut";
* 1. Receives standard Javascript string
* 2. Replaces special characters with XML compliant syntax.
* 3. Returns the result.
*
* @param {string} postalCode - the postal code to validate.
*
* @return {string} cleaned
*/
const xmlOut = str => str
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '');

const createSagawaCheckZipAPI = () => {
  const api = create({
    baseURL: 'https://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService',
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      SOAPAction: 'http://ws.com',
    },
    withCredentials: false,
  });

  /**
  * Function: "validatePostal";
  * 1. Inserts postal code into XML formatted request.
  * 2. Returns the result.
  *
  * @param {string} postalCode - the postal code to validate.
  *
  * @return {object} axios formatted response object.
  */
  const validatePostal = postalCode => api.post('getAddr',
  `<?xml version='1.0' encoding='utf-8'?>
  <soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'  xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
  <soap:Body>
    <getAddr xmlns='http://ws.com'>
    <zipcode>${xmlOut(postalCode)}</zipcode>
  </getAddr>
</soap:body>
</soap:Envelope>`);

  return {
    validatePostal,
  };
};

export default createSagawaCheckZipAPI();

/**
* Function: "checkZip";
* NOTE This function is only meant to be used during testing.
* 1. Receives response.
* 2. Destructures response as { problem, ok, data }.
* 3a. If problem, parse the XML problem and assign to Redux state error object value.
* 3b. If no problem, parse the XML results into JSON and return the results object.
*
* @param {string} postalCode - the postal code to validate.
*
* @return {object} XML parsed as JSON response object.
*/
// sagawaZipAPI.validatePostal('222003')
// .then((response) => {
//   const { problem, ok, data } = response;
//   // console.log('RESPONSE:\n', response., '\n\n');
//   if (problem) {
//     console.log('\nERROR: ', problem);
//     xml2js.parseString(data, (err, results) => {
//       if (err) console.log('PARSE ERROR: \n', err);
//       console.log('PARSE OK: \n', JSON.stringify(results, null, 2));
//     });
//   }
//   if (ok) {
//     xml2js.parseString(data, (err, results) => {
//       if (err) console.log('PARSE ERROR: \n', err);
//       console.log('PARSE OK: \n', JSON.stringify(results, null, 2));
//     });
//   }
// });

// const goodResponse = {
//  'soapenv:Envelope': {
//    '$': {
//      'xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
//    },
//
//    'soapenv:Body': [
//      {
//        'ns:getAddrResponse': [
//          {
//            '$': {
//              'xmlns:ns': 'http://ws.com',
//            },
//            'ns:return': [
//              '2220033|神奈川県横浜市港北区新横浜|0',
//            ],
//          },
//        ],
//      },
//    ],
//  },
// };
