export default function GenerateItemObjs(cart) {
  return cart.map(product => ({
    itemcd: product.sku,
    itemname: `${product.vender.toUppercase()} - ${product.flavor.toUpperCase()} NICOTINE ${Number(product.nicotineStrength)}mg E-JUICE 30 mil`,
    origin: 'US',
    piece: product.qty,
    unitprice: product.price,
  }));
}
