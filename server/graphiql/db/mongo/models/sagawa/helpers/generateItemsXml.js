export default function generateItemXml(cart) {
  cart.map(({ qty, product }) =>
    (
      `<ITEM>
        <ITEMCD>${product.sku}</ITEMCD>
        <ITEMNAME>${product.vender.toUppercase()} - ${product.flavor.toUpperCase()} NICOTINE ${Number(product.nicotineStrength)}mg E-JUICE 30 mil</ITEMNAME>
        <USAGE>0</USAGE>
        <ORIGIN>US</ORIGIN>
        <PIECE>${qty}</PIECE>
        <UNITPRICE>${product.price}</UNITPRICE>
      </ITEM>`
    ),
  );
}
