/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import userSchema from '../schemas/userSchema';
import jwt from 'jsonwebtoken';

export default (db) => {
  /**
  * 1) Retrieve the auth0Identities.user_id from User collection using input argument "userId".
  * 2) Retrieve the user_id by decoding the accessToken.
  * 3) Check whether the access_token matches the userID.
  * 4) Resolves || Rejects with result.
  *
  * @param {string} userId - the user's Mongo _id.
  * @param {string} authorization - the user's JWT based access_token.
  *
  * @return {object} - Promise resolved with found User document.
  */
  userSchema.statics.authorize = (userId, accessToken) =>

  new Promise((resolve, reject) => {
    let match = accessToken.match(/^Bearer (.*)$/);

    if (!match || match.length < 2) {
      throw new Error("Invalid Authorization token -" + tokenString + " does not match the bearer");
    }

    const decoded = jwt.decode(match[1], {complete: true});
    const jwtUserId = decoded.payload.sub.split("|")[1];

    User
    .findById(userId)
    .exec()
    .then((dbUser) => {
      dbUser.authentication.auth0Identities.forEach((socialAuth, i) => {
        if (jwtUserId === socialAuth.user_id) {
          console.log(`Authorized User: ${jwtUserId}.`);
          resolve(dbUser);
        } else {
          reject(`UnAuthorized User: ${userId}`);
        }
      });
    })
    .catch((error) => {
      console.log(`Mongo ERROR: ${error}`);
      reject(`Mongo ERROR: ${error}`);
    });
  });

  /**
  * 1) Query User collection using input argument "userId".
  * 2) Resolves || Rejects with result.
  *
  * @param {string} userId - the user's Mongo _id.
  *
  * @return {object} - Promise resolved with found User document.
  */
  userSchema.statics.fetchUserProfile = (userId, authorization) =>
  new Promise((resolve, reject) => {

    return User.authorize(userId, authorization);
    .then((dbUser) => {
      console.log(`User Found: ${dbUser._id}. Sending updated profile to Client.  `);
      resolve(dbUser);
    })
    .catch((error) => {
      console.log(`Could Not find a user with this is: ${userId}. Mongo ERROR: ${error}`);
      reject(`Could Not find a user with this is: ${userId}. Mongo ERROR: ${error}`);
    });
  });

  /**
  * Function: "loginOrRegister"
  * Checks for previous user matching the input auth0 id.  If found, logs user in. If not found, registers user.
  *
  * 1) Saves "auth0Id" & "loginType" to external variables and removes those from input "args" arguments.  By removing from args input, register user can cleanly create new instance with 1 input, "args".
  * 2) Queries User Collection with "auth0Id".
  * 3a) If found - calls "loginUser" with loginType, found user & remaining args.
  * 3b) If not found - calls "registerUser" with input args.
  * 4) Resolves || Rejects with final result.
  *
  * @param {string} userId - the user's Mongo _id.
  *
  * @return {object} - Promise resolved with updated User document.
  */
  userSchema.statics.loginOrRegister = args =>
  new Promise((resolve, reject) => {
    const auth0Id = args.auth0Id;
    const loginType = args.loginType;
    delete args.auth0Id;
    delete args.loginType;

    User
    .findOne({ 'authentication.auth0Identities.userId': auth0Id })
    .exec()
    .then((dbUser) => {
      if (!dbUser) return User.registerUser(args);
      return User.loginUser(loginType, dbUser, args);
    })
    .then(resolve)
    .catch(error => reject({ problem: error }));
  });

  /**
  * 1) Modifies dbUser document values based on new successful login and saves result.
  * 2) Resolves || Rejects with result.
  *
  * @param {string} loginType - the Social Auth provider used to login.
  * @param {object} dbUser - the Mongo User Document to modify.
  * @param {object} userObj - the new values to update Mongo User Document.
  *
  * @return {object} - Promise resolved with updates User Document.
  */
  userSchema.statics.loginUser = (loginType, dbUser, userObj) =>
  new Promise((resolve) => {
    console.log('Found Existing User.\n');
    dbUser.authentication.totalLogins += 1;
    dbUser.authentication.logins.push(userObj.authenticationLogins.pop());
    dbUser.contactInfo.location = { ...userObj.contactInfoLocation };
    dbUser.socialProfileBlob[loginType] = userObj.socialProfileBlob[loginType];

    const savedOldCart = [...dbUser.shopping.cart];
    const newCart = [...savedOldCart, ...userObj.shoppingCart];

    if (!!newCart.length) {
      const newQty = newCart.reduce((accum, next) => (accum += next.qty), 0);

      if (newQty > 4) {
        dbUser.error.soft = true;
        dbUser.error.hard = false;
        dbUser.error.msg = 'You have old items still saved in your cart from your last login.  Please purchase or delete these items before adding new ones.  Thanks for visiting us again. 🙂';
      } else {
        dbUser.shopping.cart = [...newCart];
      }
    }

    dbUser.save({ validateBeforeSave: true })
    .then(resolve);
  });

  /**
  * 1) Creates new Mongo User Document.
  * 2) Resolves || Rejects with result.
  *
  * @param {object} userObj - New user info.
  *
  * @return {object} - Promise resolved with new User Document.
  */
  userSchema.statics.registerUser = userObj =>
  new Promise((resolve, reject) => {
    const {
      name,
      pictures,
      authentication,
      authenticationLogins,
      authenticationAuth0Identities,
      contactInfo,
      contactInfoLocation,
      contactInfoDevices,
      contactInfoSocialNetworks,
      shopping,
      shoppingCart,
      permissions,
      userStory,
      socialProfileBlob,
    } = userObj;

    bbPromise.fromCallback(cb => User.create({
      name,
      pictures,
      authentication: {
        ...authentication,
        logins: [...authenticationLogins],
        auth0Identities: [...authenticationAuth0Identities],
      },
      contactInfo: {
        ...contactInfo,
        email: contactInfo.email ? contactInfo.email : '',
        location: { ...contactInfoLocation },
        devices: [...contactInfoDevices],
        socialNetworks: [...contactInfoSocialNetworks],
      },
      shopping: {
        ...shopping,
        cart: [...shoppingCart],
      },
      permissions,
      userStory,
      socialProfileBlob,
    }, cb))
    .then((newUser) => {
      console.log('\nNew User created!: ', newUser._id, '\nName: ', newUser.name.display, '\n');
      resolve(newUser);
    })
    .catch(reject);
  });

  /**
  * Updates User Document's shopping cart with product information.
  * 1) Finds user by Mongo _id.
  * 2) Populates found document's shopping cart with product info.
  * 3) Saves changes.
  * 4) Resolves || Rejects with result.
  *
  * @param {object} cartObj - userId {string}, qty {number}, product {object}.
  *
  * @return {object} - Promise resolved with updated User Document.
  */
  userSchema.statics.addToMemberCart = ({ userId, qty, productId }) =>
  new Promise((resolve, reject) => {
    User
    .findById(userId)
    .exec()
    .then((dbUser) => {
      dbUser.shopping.cart.push({ qty, productId });
      return dbUser.save({ validateBeforeSave: true });
    })
    .then((savedUser) => {
      console.log('Saved product to the User\'s Shopping Cart!');
      resolve(savedUser);
    })
    .catch((error) => {
      console.log(`Could not save product to Users shopping cart. ERROR = ${error}`);
      reject(`Could not save product to Users shopping cart. ERROR = ${error}`);
    });
  });

  /**
  * Deletes product from users shopping cart.
  * 1) Finds user by Mongo _id.
  * 2) filters users shopping cart by productId.
  * 3) Saves changes.
  * 4) Resolves || Rejects with result.
  *
  * @param {object} cartObj - userId {string}, productId {string}.
  *
  * @return {object} - Promise resolved with updated User Document.
  */
  userSchema.statics.deleteFromCart = ({ userId, productId }) =>
  new Promise((resolve, reject) => {
    User.findById(userId)
    .exec()
    .then((dbUser) => {
      dbUser.shopping.cart = dbUser.shopping.cart
      .filter(cartObj => String(cartObj.productId) !== String(productId));
      return dbUser.save({ validateBeforeSave: true });
    })
    .then((savedUser) => {
      console.log(`Deleted Product: ${productId} from User: ${savedUser._id}.`);
      resolve(savedUser);
    })
    .catch((error) => {
      console.log(`Could not Delete Product: ${productId} from User: ${userId}. ERROR = ${error}`);
      reject(`Could not Delete Product: ${productId} from User: ${userId}. ERROR = ${error}`);
    });
  });

  /**
  * Modifies product(s) in user's shopping cart.
  * 1) Finds user by Mongo _id.
  * 2) Replaces shopping cart with new products array.
  * 3) Saves changes.
  * 4) Resolves || Rejects with result.
  *
  * @param {object} cartObj - userId {string}, products {array}.
  *
  * @return {object} - Promise resolved with updates User Document.
  */
  userSchema.statics.editToMemberCart = ({ userId, products }) =>
  new Promise((resolve, reject) => {
    User
    .findById(userId)
    .exec()
    .then((dbUser) => {
      dbUser.shopping.cart = products;
      return dbUser.save({ validateBeforeSave: true });
    })
    .then((updatedUser) => {
      console.log('Updated user shopping cart!');
      resolve(updatedUser);
    })
    .catch((error) => {
      console.log(`Could not Update User: ${userId}. ERROR = ${error}`);
      reject(`Could not Update User: ${userId}. ERROR = ${error}`);
    });
  });

  const User = db.model('User', userSchema);
  return User;
};
