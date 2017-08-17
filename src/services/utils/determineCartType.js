/**
* Function: "determineCartType"
* 1) Dynamically assings "cartItems" to either the guest-cart or the logged-in-users-cart.
* 2) If the cartItems is to be assigned to the logged-in-users-cart, then the "zipUserCart" function is called.  The returned value will be an updated array.
* 3) Otherwise if the cartItems is to be assigned to the guestCart - a simple assignment is applied.
*
* @param {bool} loggedIn - is the user logged in?
* @param {array} guestCart - array of product objects & "qty".
* @param {array} userCart - array of "qty" and the product _id.
* @param {array} fetchCartProductsResult - apollo query result array - contains pure product objects from mongo.
*
* @return {array} cartItems - either the guest cart or the populated userCart.
*
* NOTE - This function is called for the Single Product page, as well as the Cart page.
*/
export default ({
  loggedIn,
  guestCart,
  userCart,
  FetchMultipleProducts,
  updatedCart,
}, zipUserCart) => {
  let cartItems = [];

  if (!loggedIn && !!guestCart.length) {
    cartItems = guestCart;
  } else if (loggedIn && !!FetchMultipleProducts.FetchMultipleProducts) {
    cartItems = zipUserCart(userCart, FetchMultipleProducts.FetchMultipleProducts);
  }

  return cartItems;
};
