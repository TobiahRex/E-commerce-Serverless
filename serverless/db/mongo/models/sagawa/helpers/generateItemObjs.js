export default function GenerateItemObjs(cart) {
  return cart.map(productDoc => ({
    productId: productDoc._id,
    itemcd: productDoc.product.sku,
    itemname: `${productDoc.product.vendor.en.toUpperCase()} - ${productDoc.product.title.en.toUpperCase()} NICOTINE ${Number(productDoc.product.nicotineStrength)}mg E-JUICE 30 mil`,
    origin: 'US',
    piece: productDoc.qty,
    unitprice: productDoc.product.price,
  }));
}
