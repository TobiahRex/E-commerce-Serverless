/**
* Function: "checkNewUser"
* 1) First checks if the user is even logged in.  If they are not, then the next step will throw an error if allowed to continue.
* 2) Navigates through the user profile to their shopping cart, and checks to see if they've ever made a purchase.  If they have, then we know they are not a new user.  If they haven't then we know that they are allowed to tuse the 10% new user discount.
*
* @param {object} user - the users logged in profile.
* @param {bool} loggedIn - Whether or not the user is logged in.
*
* @return {bool} - Final answer.
*/

export default function checkNewUser(user, loggedIn) {
  if (!loggedIn) return false;
  return !user.profile.shopping.transactions.length;
}
