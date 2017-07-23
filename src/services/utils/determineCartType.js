/**
* Function: "determineCartType"
* 1) Dynamically assings "cartItems" to either the guest-cart or the logged-in-users-cart.
* 2) If the cartItems is to be assigned to the logged-in-users-cart, then the "zipUserCart" function is called.  The returned value will be an updated array.
* 3) Otherwise if the cartItems is to be assigned to the guestCart - a simple assignment is applied.
*
* @param {bool} loggedIn - is the user logged in?
* @param {array} guestCart - array of product objects & "qty".
* @param {}
*/
export default (
  loggedIn,
  guestCart,
  userCart,
  fetchCartProductsResult,
) => {
  let cartItems = [];
  if (!loggedIn && guestCart.length) {
    cartItems = guestCart;
  } else if (loggedIn && !!fetchCartProductsResult.FetchMultipleProducts) {
    cartItems = this.zipUserCart(userCart, fetchCartProductsResult.FetchMultipleProducts);
  }
  return cartItems;
};
