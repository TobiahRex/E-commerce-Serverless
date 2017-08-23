export default function generateAddressXml(sagawaDoc) {
  return (
    `<ADDRESS>
      <PRINTERNAME />
      <BOXID>${sagawaDoc.shippingAddress.boxid}</BOXID>
      <SHIPDATE>${sagawaDoc.shippingAddress.shipdate}</SHIPDATE>
      <KANA>${sagawaDoc.shippingAddress.customerName}</KANA>
      <POSTAL>${sagawaDoc.shippingAddress.postal}</POSTAL>
      <JPADDRESS1>${sagawaDoc.shippingAddress.jpaddress1}</JPADDRESS1>
      <JPADDRESS2>${sagawaDoc.shippingAddress.jpaddress2}</JPADDRESS2>
      <CONTEL>${sagawaDoc.shippingAddress.phoneNumber}</CONTEL>
      <KBN>${sagawaDoc.shippingAddress.kbn}</KBN>
      <WGT>${sagawaDoc.shippingAddress.wgt}</WGT>
      <SHINADAI>${sagawaDoc.shippingAddress.grandTotal}</SHINADAI>
      <SHITEIBI>${sagawaDoc.shippingAddress.deliveryDate}</SHITEIBI>
      <SHITEIJIKAN>${sagawaDoc.shippingAddress.deliveryTime}</SHITEIJIKAN>
      <SOURYO>${sagawaDoc.shippingAddress.souryo}</SOURYO>
      <TESURYO>${sagawaDoc.shippingAddress.tesuryo}</TESURYO>
      <TTLAMOUNT>${sagawaDoc.shippingAddress.ttlAmount}</TTLAMOUNT>
      <CODFLG>${sagawaDoc.shippingAddress.codFlg}</CODFLG>
    </ADDRESS>`
  );
}
