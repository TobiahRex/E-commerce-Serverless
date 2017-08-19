export default function generateItemsXml(sagawaDoc) {
  sagawaDoc.items.map(item =>
    (
      `<ITEM>
        <ITEMCD>${item.itemcd}</ITEMCD>
        <ITEMNAME>${item.itemname}</ITEMNAME>
        <USAGE>${item.usage}</USAGE>
        <ORIGIN>${item.origin}</ORIGIN>
        <PIECE>${item.piece}</PIECE>
        <UNITPRICE>${item.unitprice}</UNITPRICE>
      </ITEM>`
    ),
  );
}
