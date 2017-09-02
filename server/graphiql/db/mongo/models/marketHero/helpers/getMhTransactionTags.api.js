/* eslint-disable no-console, no-loop-func */
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
      const vendor = next.product.vendor.replace(/(Vape Switch)+/ig, 'vape-switch');
      const productName = next.product.flavor;
      const strength = `${next.product.nicotineStrength}mg`;
      flavorTags.push(`$${vendor}_${productName}_${strength}`);
    }

    acc = [...acc, ...flavorTags];

    return acc;
  }, []);
  const result = {
    userTags: [...tags],
    productTags: [...productTags],
  };
  console.log('MARKET HERO TAGS: ', result);
  return result;
}
