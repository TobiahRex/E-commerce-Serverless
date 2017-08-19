export default function GenerateItemObjs(cart) {
  return cart.map(product => ({
    productId: product._id,
    itemcd: product.sku,
    itemname: `${product.vender.toUppercase()} - ${product.flavor.toUpperCase()} NICOTINE ${Number(product.nicotineStrength)}mg E-JUICE 30 mil`,
    origin: 'US',
    piece: product.qty,
    unitprice: product.price,
  }));
}
