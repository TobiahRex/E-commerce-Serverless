export default function generateAddressXml(sagwaDoc) {
  return (
    `<ADDRESS>
      <PRINTERNAME />
      <BOXID>${sagwaDoc.shippingAddress.boxid}</BOXID>
      <SHIPDATE>${sagwaDoc.shippingAddress.shipdate}</SHIPDATE>
      <KANA>${sagwaDoc.shippingAddress.customerName}</KANA>
      <POSTAL>${sagwaDoc.shippingAddress.postal}</POSTAL>
      <JPADDRESS1>${sagwaDoc.shippingAddress.jpAddress1}</JPADDRESS1>
      <JPADDRESS2>${sagwaDoc.shippingAddress.jpAddress2}</JPADDRESS2>
      <CONTEL>${sagwaDoc.shippingAddress.phoneNumber}</CONTEL>
      <KBN>${sagwaDoc.shippingAddress.kbn}</KBN>
      <WGT>${sagwaDoc.shippingAddress.wgt}</WGT>
      <SHINADAI>${sagwaDoc.shippingAddress.grandTotal}</SHINADAI>
      <SHITEIBI>${sagwaDoc.shippingAddress.deliveryDate}</SHITEIBI>
      <SHITEIJIKAN>${sagwaDoc.shippingAddress.deliveryTime}</SHITEIJIKAN>
      <SOURYO>${sagwaDoc.shippingAddress.souryo}</SOURYO>
      <TESURYO>${sagwaDoc.shippingAddress.tesuryo}</TESURYO>
      <TTLAMOUNT>${sagwaDoc.shippingAddress.ttlAmount}</TTLAMOUNT>
      <CODFLG>${sagwaDoc.shippingAddress.codFlg}</CODFLG>
    </ADDRESS>`
  );
}
