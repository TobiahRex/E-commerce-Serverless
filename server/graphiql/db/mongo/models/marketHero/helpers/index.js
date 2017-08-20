export default function GetMHTransactionTags({
  cart,
  langauge,
  total: {
    discount: {
      qty,
      register,
    },
  },
}) {
  const tags = [`!${language}`];

  if (qty) tags.push('!Discount_qty');
  if (register) tags.push('!Discount_register');

  let productTags = cart.reduce((acc, next) => {
    let vendor = next.product.vendor.replace(/(\sJuice)/g, 'juice');
    let productName = next.product.flavor.split(' ').reduce((a, n) => {

    }, '');

    return acc;
  }, []);
}
