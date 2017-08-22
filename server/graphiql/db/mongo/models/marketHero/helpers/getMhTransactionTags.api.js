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

  if (subscribed) {
    tags.push('!subscribed');
  } else {
    tags.push('!not_subscribed');
  }
  if (qty) tags.push('!discount_qty');
  if (register) tags.push('!discount_register');

  const productTags = cart.reduce((acc, next) => {
    let qtyCounter = next.qty;
    const flavorTags = [];
    while (qtyCounter--) { //eslint-disable-line
      const vendor = next.product.vendor.replace(/(\sSwitch)/g, 'switch');
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
