/**
* Function: "calculateTotalsDue"
* 1) For each product currently in the cart, calculate the total for that item by multiplying the underlying price with the quantity requested.
* 2) Add that to the individual subtotal (newly created key) to each productObj.
* 3) Add that amount to the "grandTotal".
* @NOTE - Mutates the original "productObj" by adding key "subTotal".
*
* @param {none} N/A
*
* @return {N/A} Set's new state for taxes & grandTotal.
*/
const calculateTotalsDue = (cart, { totalRate }) => {
  let grandTotal = 0;

  cart.forEach((productObj) => {
    productObj.subTotal = productObj.qty * Number(productObj.product.price);
    grandTotal += productObj.subTotal;
  });

  const taxes = Number((grandTotal * totalRate).toFixed(2));
  grandTotal += taxes;

  return ({
    taxes,
    grandTotal,
  });
};

export default calculateTotalsDue;
