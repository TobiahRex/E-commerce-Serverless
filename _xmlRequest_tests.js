import { create } from 'apisauce';
import xml2js from 'xml2js';
import fs from 'fs';

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
    responseType: 'stream',
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

const createCheckZipSagawaAPI = () => {
  const api = create({
    baseURL: 'http://asp4.cj-soft.co.jp/WebServiceTest/services/MathService',
    credentials: 'omit',
    headers: {
      'Content-Type': 'text/html',
      SOAPAction: 'http://ws.com',
    },
  });

  const checkZip = zip => api.post('getAddr',
  `<?xml version='1.0' encoding='utf-8'?>
  <soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'  xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
    <soap:Body>
      <uploadFile xmlns='http://ws.com'>
        <handler>
          ${xmlOut(zip)}
        </handler>
      </uploadFile>
    </soap:body>
  </soap:Envelope>`);

  return {
    checkZip,
  };
};
const sagawaZipAPI = createCheckZipSagawaAPI();
// uploadAPI.uploadOrder(`
// <DATA>
//   <ADDRESS>
//     <PRINTERNAME />
//     <BOXID>PCH 2017 6 11 0001</BOXID>
//     <SHIPDATE>2012/08/07</SHIPDATE>
//     <KANA>ヤマモト　アツシ</KANA>
//     <POSTAL>1400012</POSTAL>
//     <JPADDRESS1>東京都品川区勝島</JPADDRESS1>
//     <JPADDRESS2>1-1-1　東京SRC4F</JPADDRESS2>
//     <CONTEL>0337688503</CONTEL>
//     <KBN>TEST1465</KBN>
//     <WGT>1.5</WGT>
//     <SHINADAI>0</SHINADAI>
//     <SHITEIBI />
//     <SHITEIJIKAN />
//     <SOURYO>0</SOURYO>
//     <TESURYO>0</TESURYO>
//     <TTLAMOUNT>0</TTLAMOUNT>
//     <CODFLG>0</CODFLG>
//   </ADDRESS>
//   <ITEM>
//     <ITEMCD>1234</ITEMCD>
//     <ITEMNAME>Tablet PC with Windows7</ITEMNAME>
//     <USAGE>0</USAGE>
//     <ORIGIN>CN</ORIGIN>
//     <PIECE>1</PIECE>
//     <UNITPRICE>7000</UNITPRICE>
//   </ITEM>
// </DATA>
// `)
// .then((response) => {
//   // response.data.pipe(fs.createWriteStream('_sagawaResponse.xml'));
//   const { problem, ok, data } = response;
//   console.log('RESPONSE:\n', response, '\n\n');
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
sagawaZipAPI.checkZip('1400012')
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
