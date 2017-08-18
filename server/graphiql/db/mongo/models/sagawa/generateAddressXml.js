import moment from 'moment';

export default function generateAddressXml(sagawaInfo) {
  const today = new Date();


  return (
    `<ADDRESS>
      <PRINTERNAME />
      <BOXID>NJ2JP${Date.now()}</BOXID>
      <SHIPDATE>${moment().format('YYYY/MM/DD')}</SHIPDATE>
      <KANA>${sagawaInfo.familyName} ${sagawaInfo.givenName}</KANA>
      <POSTAL>${sagawaInfo.postalCode}</POSTAL>
      <JPADDRESS1>${sagawaInfo}</JPADDRESS1>
      <JPADDRESS2>1-1-1　東京SRC4F</JPADDRESS2>
      <CONTEL>08039188013</CONTEL>
      <KBN>TEST1532</KBN>
      <WGT>1.5</WGT>
      <SHINADAI>120.00</SHINADAI>
      <SHITEIBI>2017/07/29</SHITEIBI>
      <SHITEIJIKAN>1200</SHITEIJIKAN>
      <SOURYO>0</SOURYO>
      <TESURYO>0</TESURYO>
      <TTLAMOUNT>120.00</TTLAMOUNT>
      <CODFLG>0</CODFLG>
    </ADDRESS>`
  )
}
