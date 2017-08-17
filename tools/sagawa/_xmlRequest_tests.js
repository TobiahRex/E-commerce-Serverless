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
    <BOXID>VPS201707240001</BOXID>
    <SHIPDATE>2017/07/25</SHIPDATE>
    <KANA>トーバーヤ　ビークリー</KANA>
    <POSTAL>1400012</POSTAL>
    <JPADDRESS1>東京都品川区勝島</JPADDRESS1>
    <JPADDRESS2>1-1-1　東京SRC4F</JPADDRESS2>
    <CONTEL>08039188013</CONTEL>
    <KBN>TEST1465</KBN>
    <WGT>1.5</WGT>
    <SHINADAI>100.98</SHINADAI>
    <SHITEIBI>2017/07/29</SHITEIBI>
    <SHITEIJIKAN>1200</SHITEIJIKAN>
    <SOURYO>0</SOURYO>
    <TESURYO>0</TESURYO>
    <TTLAMOUNT>100.98</TTLAMOUNT>
    <CODFLG>0</CODFLG>
  </ADDRESS>
  <ITEM>
    <ITEMCD>NJ2JP0001</ITEMCD>
    <ITEMNAME>VAPE SWITCH - FRENCH VANILLA MOCHA NICOTINE E-JUICE</ITEMNAME>
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


/*
<ADDRESS>
<PRINTERNAME></PRINTERNAME>  (1. What should go here?  The customer name?)
1.  you do not have to input this since you don't print Japan domestic delivery label in US.

<BOXID>PCH 2016 10 11 0001 </BOXID>  (2. Is this the same as the order number? 14 digits + VPS ?)
2. yes, it should be an order number for each parcel.   VPS + yyyymmdd+ 001  or something like that.

<SHIPDATE>2012/08/07</SHIPDATE>
<KANA>ヤマモト　アツシ</KANA>   (3. Is this the same as the order number? 14 digits + VPS ?)
3. no, this is the name of consignee. It should be alphabets or Japanese KATAKANA or HIRAGANA,
we need information of how to read, how to pronounce the name, so should not be in Japanese KANJI.

<POSTAL>1400012</POSTAL>
<JPADDRESS1>東京都品川区勝島</JPADDRESS1>
<JPADDRESS2>1-1-1　東京SRC4F</JPADDRESS2>
<CONTEL>0337688503</CONTEL>
<KBN>11111111111</KBN>  (4. What is this?)
4. this is an account number for our system. I will provide you later.
it will be 4 digits number.

<WGT>1.5</WGT>
<SHINADAI>0</SHINADAI>  (5. What is this?)
5. total item value. ( not mandatory )  If you do not input the value,  the system will calculate from unit price.

<SHITEIBI></SHITEIBI>  (6. What is this?)
6. specified delivery day ( not mandatory )

<SHITEIJIKAN></SHITEIJIKAN>  (7. What is this?)
7. specified delivery time ( not mandatory )

<SOURYO>0</SOURYO>  (8. What is this?)
8. shipping fee ( not mandatory )

<TESURYO>0</TESURYO>  (9. What is this?)
9.  commission fee ( not mandatory )

<TTLAMOUNT>0</TTLAMOUNT>  (10. What is this?)
10.  Total amount of above, item value + shipping fee + commission fee etc.

<CODFLG>0</CODFLG>  (11. What is this?)
11.  flag for distinguished COD or not  ( always " 0 " if all shipment are not COD )

</ADDRESS>
<ITEM>
<ITEMCD>1234</ITEMCD>  (12. What is this?)
12. item code for each item which can be used for searching on the web

<ITEMNAME>Tablet PC with Windows7</ITEMNAME>
<USAGE>0</USAGE>" & _
"<ORIGIN>CN</ORIGIN>
<PIECE>1</PIECE>
<UNITPRICE>7000</UNITPRICE>
</ITEM>
*/
