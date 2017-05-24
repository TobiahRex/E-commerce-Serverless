import { create } from 'apisauce';
import xml2js from 'xml2js';

// const xmlOut = str => str
//   .replace(/&/g, '&amp;')
//   .replace(/</g, '&lt;')
//   .replace(/>/g, '&gt;')
//   .replace(/"/g, '');

const orderData = `
<DATA>
  <ADDRESS>
    <PRINTERNAME />
    <BOXID>PCH 2016 10 11 0001</BOXID>
    <SHIPDATE>2012/08/07</SHIPDATE>
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
`;

const sr = `<?xml version="1.0" encoding="utf-8"?>
  <soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soapenv:Body>
        <uploadFile xmlns="http://ws.com">
            <handler>
              ${orderData}
            </handler>
        </uploadFile>
    </soapenv:Body>
</soapenv:Envelope>`;

const createSagawaAPI = () => {
  const api = create({
    baseURL: 'http://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService/uploadData',
    credentials: 'omit',
    headers: {
      'Content-Type': 'text/xml',
      SOAPAction: 'http://ws.com',
    },
  });

  const uploadOrder = () => api.post('', sr);

  return {
    uploadOrder,
  };
};
const api = createSagawaAPI();
api.uploadOrder()
.then((response) => {
  // console.log(response);
  const { problem, ok, data } = response;
  console.log('RESPONSE:\n', response, '\n\n');
  if (problem) console.log('\nERROR: ', problem);
  if (ok) {
    xml2js.parseString(data, (err, results) => {
      if (err) console.log('PARSE ERROR: \n', err);
      console.log('PARSE OK: \n', JSON.stringify(results, null, 2));
    });
  }
});
