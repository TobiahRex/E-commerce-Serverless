/* eslint-disable */
import { create } from 'apisauce';
import xml2js from 'xml2js';
import fs from 'fs';
require('dotenv').load({ silent: true });

const xmlOut = str => str
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '');

const createUploadToSagawaAPI = () => {
  const api = create({
    baseURL: 'http://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService/uploadData',
    credentials: 'omit',
    headers: {
      'Content-Type': 'text/xml',
      SOAPAction: 'http://ws.com',
    },
    // responseType: 'stream',
  });

  const uploadOrder = orderData => api.post('',
  `<?xml version='1.0' encoding='utf-8'?>
  <soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'  xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
  <soap:Body>
    <uploadFile xmlns='http://ws.com'>
    <handler>
      ${xmlOut(orderData)}
    </handler>
    </uploadFile>
  </soap:body>
</soap:Envelope>`);

return {
  uploadOrder,
};
};
const sagawaUploadAPI = createUploadToSagawaAPI();
sagawaUploadAPI.uploadOrder(`
<DATA>
  <ADDRESS>
    <PRINTERNAME />
    <BOXID>NJ2017101400001</BOXID>
    <SHIPDATE>2017/10/14</SHIPDATE>
    <KANA>Liron Leb</KANA>
    <POSTAL>1350043</POSTAL>
    <JPADDRESS1>東京都江東区塩浜</JPADDRESS1>
    <JPADDRESS2>2-9-8-904</JPADDRESS2>
    <CONTEL>08046673210</CONTEL>
    <KBN>1569</KBN>
    <WGT>0.12</WGT>
    <SHINADAI>120.00</SHINADAI>
    <SHITEIBI>2017/10/18</SHITEIBI>
    <SHITEIJIKAN>1200</SHITEIJIKAN>
    <SOURYO>0</SOURYO>
    <TESURYO>0</TESURYO>
    <TTLAMOUNT>120.00</TTLAMOUNT>
    <CODFLG>0</CODFLG>
  </ADDRESS>
  <ITEM>
    <ITEMCD>NJ2JP0001</ITEMCD>
    <ITEMNAME>VAPE SWITCH - FRENCH VANILLA MOCHA NICOTINE 6MGS / 30 ML</ITEMNAME>
    <USAGE>0</USAGE>
    <ORIGIN>US</ORIGIN>
    <PIECE>4</PIECE>
    <UNITPRICE>30</UNITPRICE>
  </ITEM>
</DATA>
`)
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
//
// const createSagawaCheckZipAPI = () => {
//   const api = create({
//     baseURL: 'http://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService',
//     credentials: 'omit',
//     headers: {
//       'Content-Type': 'text/xml; charset=utf-8',
//       SOAPAction: 'http://ws.com',
//     },
//   });
//
//   const checkZip = zip => api.post('getAddr',
//   `<?xml version='1.0' encoding='utf-8'?>
//   <soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'  xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
//   <soap:Body>
//     <getAddr xmlns='http://ws.com'>
//     <zipcode>${xmlOut(zip)}</zipcode>
//   </getAddr>
// </soap:body>
// </soap:Envelope>`);
//
//   return {
//     checkZip,
//   };
// };


/**
* Success Response:
* PARSE OK:
 {

  "soapenv:Envelope": {
    "$": {
      "xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/"
    },
    "soapenv:Body": [
      {
        "ns:uploadDataResponse": [
          {
            "$": {
              "xmlns:ns": "http://ws.com"
            },
            "ns:return": [
              "ok:15175840|VPS201707240001|C7016404D|7016|404|A200000951360A|2000-0095-1360|0"
            ]
          }
        ]
      }
    ]
  }
}
*/
