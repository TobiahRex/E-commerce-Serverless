export default function getMhTransactionTagsApi({
  cart,
  language,
  subscribed,
  total: {
    discount: {
      qty,
      register,
    },
  },
}) {
  const tags = [`!${language}`];

  if (subscribed) tags.push('!Subscribed');
  if (qty) tags.push('!Discount_qty');
  if (register) tags.push('!Discount_register');

  const productTags = cart.reduce((acc, next) => {
    let qtyCounter = next.qty;
    const flavorTags = [];
    while (qtyCounter--) { //eslint-disable-line
      const vendor = next.product.vendor.replace(/(\sSwitch)/g, 'Switch');
      const productName = next.product.flavor.split('_').reduce((a, n) => {
        a += n.toUpperCase();
        return a;
      }, '');
      const strength = `${next.product.nicotineStrength}mg`;
      flavorTags.push(`$${vendor}_${productName}_${strength}`);
    }

    acc = [...acc, ...flavorTags];

    return acc;
  }, []);

  return [...tags, ...productTags];
}
