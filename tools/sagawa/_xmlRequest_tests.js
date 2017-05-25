/* eslint-disable */
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
    <BOXID>VPS20176110001</BOXID>
    <SHIPDATE>2017/06/07</SHIPDATE>
    <KANA>ヤマモト　アツシ</KANA>
    <POSTAL>1400012</POSTAL>
    <JPADDRESS1>東京都品川区勝島</JPADDRESS1>
    <JPADDRESS2>1-1-1　東京SRC4F</JPADDRESS2>
    <CONTEL>0337688503</CONTEL>
    <KBN>TEST1465</KBN>
    <WGT>1.5</WGT>
    <SHINADAI>0</SHINADAI>
    <SHITEIBI />
    <SHITEIJIKAN />
    <SOURYO>0</SOURYO>
    <TESURYO>0</TESURYO>
    <TTLAMOUNT>0</TTLAMOUNT>
    <CODFLG>0</CODFLG>
  </ADDRESS>
  <ITEM>
    <ITEMCD>1234</ITEMCD>
    <ITEMNAME>Tablet PC with Windows7</ITEMNAME>
    <USAGE>0</USAGE>
    <ORIGIN>CN</ORIGIN>
    <PIECE>1</PIECE>
    <UNITPRICE>7000</UNITPRICE>
  </ITEM>
</DATA>
`)
.then((response) => {
  // response.data.pipe(fs.createWriteStream('_sagawaResponse.xml'));
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
// sagawaZipAPI.checkZip('2220033')
// .then((response) => {
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

const createSagawaTrackingAPI = () => {
  const api = create({
    baseURL: 'https://tracking.sagawa-sgx.com/sgx',
    credentials: 'omit',
    headers: {
      'Content-Type': 'text/html,application/xhtml+xml',
      // SOAPAction: 'http://ws.com',
    },
  });

  const getStatus = trackingNumber => api.get('xmltrack.asp', { REF: trackingNumber});

  return {
  getStatus,
  };
};
const sagawaTrackingAPI = createSagawaTrackingAPI();

sagawaTrackingAPI.getStatus({
  AWB: 'TEST20170223001',
  REF: 564634761902,
})
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
