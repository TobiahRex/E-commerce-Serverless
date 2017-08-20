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

    return acc;
  }, []);
}
