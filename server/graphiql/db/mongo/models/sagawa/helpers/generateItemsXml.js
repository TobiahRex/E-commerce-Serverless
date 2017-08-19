export default function generateItemsXml(sagawaDoc) {
  return sagawaDoc.items.reduce((acc, nextItem) => {
    acc += (
      `<ITEM>
        <ITEMCD>${nextItem.itemcd}</ITEMCD>
        <ITEMNAME>${nextItem.itemname}</ITEMNAME>
        <USAGE>${nextItem.usage}</USAGE>
        <ORIGIN>${nextItem.origin}</ORIGIN>
        <PIECE>${nextItem.piece}</PIECE>
        <UNITPRICE>${nextItem.unitprice}</UNITPRICE>
      </ITEM>
      `
    );
    return acc;
  }, '');
}
