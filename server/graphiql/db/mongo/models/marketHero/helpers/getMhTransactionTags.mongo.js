/* eslint-disable no-console */
import moment from 'moment';

export default function getMhTransactionTags({
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
  console.log('@getMhTransactionTagsMongo');

  const tags = [{
    name: `!${language}`,
    description: 'The language the user speaks.',
    date: moment().format('ll'),
  }];

  if (subscribed) {
    tags.push({
      name: '!subscribed',
      description: 'The user explicitly subscribed to receiving Newsletters.',
      date: moment().format('ll'),
    });
  } else {
    tags.push({
      name: '!not_subscribed',
      description: 'The user has not explicitly subscribed to Newsletters.',
      date: moment().format('ll'),
    });
  }

  if (qty) {
    tags.push({
      name: '!discount_qty',
      description: 'The user has received a 25% Discount during a transaction.',
      date: moment().format('ll'),
    });
  }

  if (register) {
    tags.push({
      name: '!discount_register',
      description: 'The user has received a 10% New Member discount during a transaction.',
      date: moment().format('ll'),
    });
  }

  const productTags = cart.reduce((acc, next) => {
    let qtyCounter = next.qty;
    const flavorTags = [];
    while (qtyCounter--) { //eslint-disable-line
      const vendor = next.product.vendor.replace(/(\sSwitch)/g, '-Switch');
      const productName = next.product.flavor;
      const strength = `${next.product.nicotineStrength}mg`;
      flavorTags.push({
        name: `$${vendor}_${productName}_${strength}`,
        description: 'The purchased product details.',
        date: moment().format('ll'),
      });
    }

    acc = [...acc, ...flavorTags];

    return acc;
  }, []);

  return [...tags, ...productTags];
}
