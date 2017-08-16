
const calculateDiscounts = (cart, taxes, grandTotal, newUser) => {
  // console.log('%cgrandTotal', 'background:pink;', grandTotal);
  let grandTotalCopy = grandTotal;

  const { subTotal, totalQty } = cart.reduce((accum, next) => {
    if (!!next.qty) {
      accum.totalQty += next.qty;
      accum.subTotal += (Number(next.product.price) * next.qty);
      return accum;
    }
    return accum;
  }, {
    subTotal: 0,
    totalQty: 0,
  });

  const discount = {
    qty: false,
    qtyAmount: 0,
    register: false,
    registerAmount: 0,
  };

  if (totalQty >= 4) {
    discount.qty = true;
    discount.qtyAmount = subTotal * 0.25;
    grandTotalCopy -= discount.qtyAmount;
  }

  if (newUser) {
    discount.register = true;
    discount.registerAmount = subTotal * 0.1;
    grandTotalCopy -= discount.registerAmount;
  }

  return ({
    discount,
    subTotal,
    grandTotal: grandTotalCopy,
    taxes,
  });
};

export default calculateDiscounts;
