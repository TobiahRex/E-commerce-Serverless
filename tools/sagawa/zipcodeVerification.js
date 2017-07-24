/* eslint-disable no-console */
import { create } from 'apisauce';
import xml2js from 'xml2js';

const xmlOut = str => str
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '');


const createSagawaCheckZipAPI = () => {
  const api = create({
    baseURL: 'http://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService',
    credentials: 'omit',
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      SOAPAction: 'http://ws.com',
    },
  });

  const checkZip = zip => api.post('getAddr',
  `<?xml version='1.0' encoding='utf-8'?>
  <soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'  xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
  <soap:Body>
    <getAddr xmlns='http://ws.com'>
    <zipcode>${xmlOut(zip)}</zipcode>
  </getAddr>
</soap:body>
</soap:Envelope>`);

  return {
    checkZip,
  };
};
const sagawaZipAPI = createSagawaCheckZipAPI();
sagawaZipAPI.checkZip('2220033')
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


/**
* Successful Response:
PARSE OK:
 {
  "soapenv:Envelope": {
    "$": {
      "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/"
    },

    "soapenv:Body": [
      {
        "ns:getAddrResponse": [
          {
            "$": {
              "xmlns:ns": "http://ws.com"
            },
            "ns:return": [
              "2220033|神奈川県横浜市港北区新横浜|0"
            ]
          }
        ]
      }
    ]
  }
}
*/
