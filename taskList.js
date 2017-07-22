/*
  NOTE: Where did I leave off?
  - You are updating the User schema.
  - You are brainstorming how to match the carts for Guest and User's Cart when adding new items from the Single Product page.

  TODO:
  1) Update the db schema with new keys "error" & "errorMsg" for the products added to a users cart.
  2) Update the GraphQL input types to also track this change.
  - DB side.
  - Client side.

  TODO: Backlog
  - If the user is logged in, call a GraphQL query for the products in the logged in users cart by the products _id.  The response data should be distributed to Navbar, and Cart.

  - once the user logs in, also clear the guest Cart from local storage and redux-persist.

  - Build "Transaction" model & schema.

  - Extract tax rate from Square API.
*/
