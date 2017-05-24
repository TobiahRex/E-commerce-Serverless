/* eslint-disable */
import http from 'http';

const body =
'<?xml version="1.0" encoding="utf-8"?>' +
  '<soapenv:Envelope ' +
      'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
      'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
      'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
      'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
      '<soapenv:Body>' +
          '<uploadFile xmlns="http://ws.com">' +
              '<handler>' +
                  '<DATA>' +
                      '<ADDRESS>' +
                          '<PRINTERNAME />' +
                          '<BOXID>PCH 2016 10 11 0001</BOXID>' +
                          '<SHIPDATE>2012/08/07</SHIPDATE>' +
                          '<KANA>ヤマモト　アツシ</KANA>' +
                          '<POSTAL>1400012</POSTAL>' +
                          '<JPADDRESS1>東京都品川区勝島</JPADDRESS1>' +
                          '<JPADDRESS2>1-1-1　東京SRC4F</JPADDRESS2>' +
                          '<CONTEL>0337688503</CONTEL>' +
                          '<KBN>TEST1465</KBN>' +
                          '<WGT>1.5</WGT>' +
                          '<SHINADAI>0</SHINADAI>' +
                          '<SHITEIBI />' +
                          '<SHITEIJIKAN />' +
                          '<SOURYO>0</SOURYO>' +
                          '<TESURYO>0</TESURYO>' +
                          '<TTLAMOUNT>0</TTLAMOUNT>' +
                          '<CODFLG>0</CODFLG>' +
                      '</ADDRESS>' +
                      '<ITEM>' +
                          '<ITEMCD>1234</ITEMCD>' +
                          '<ITEMNAME>Tablet PC with Windows7</ITEMNAME>' +
                          '<USAGE>0</USAGE>' +
                          '<ORIGIN>CN</ORIGIN>' +
                          '<PIECE>1</PIECE>' +
                          '<UNITPRICE>7000</UNITPRICE>' +
                      '</ITEM>' +
                  '</DATA>' +
              '</handler>' +
          '</uploadFile>' +
      '</soapenv:Body>' +
  '</soapenv:Envelope>';

const postRequest = {
  host: 'http://localhost:3000/',
  path: 'http://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService/uploadData',
  // port: 80,
  method: 'POST',
  headers: {
    'Content-Type': 'text/xml',
    SOAPAction: 'http://ws.com'
    'Content-Length': Buffer.byteLength(body),
  },
};

let buffer = '';

const req = http.request(postRequest, (res) => {
  console.log(res.statusCode);
  let buffer = '';

  res.on('data', (data) => {
    buffer = buffer + data;
  });

  res.on('end', (data) => {
    console.log(buffer);
  });
});

req.on('error', (e) => {
  console.log('problem with request: ', e.message);
});

req.write(body);
req.end();
