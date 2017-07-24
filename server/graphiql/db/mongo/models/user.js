/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import userSchema from '../schemas/userSchema';
import db from '../connection';

userSchema.statics.fetchUserProfile = userId =>
new Promise((resolve, reject) => {
  User.findById(userId).exec()
  .then((dbUser) => {
    console.log(`
      User Found: ${dbUser._id}
      Sending updated profile to Client.
    `);
    resolve(dbUser);
  })
  .catch(error => reject(`
    Could Not find a user with this is: ${userId}

    Mongo ERROR: ${error}
    `),
  );
});

userSchema.statics.loginOrRegister = args =>
new Promise((resolve, reject) => {
  const auth0Id = args.auth0Id;
  const loginType = args.loginType;
  delete args.auth0Id;
  delete args.loginType;

  User.findOne({ 'authentication.auth0Identities.userId': auth0Id })
  .exec()
  .then((dbUser) => {
    if (!dbUser) return User.registerUser(args);
    return User.loginUser(loginType, dbUser, args);
  })
  .then(resolve)
  .catch(error => reject({ problem: error }));
});

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

userSchema.statics.addToMemberCart = ({ userId, qty, productId }) =>
new Promise((resolve, reject) => {
  User.findById(userId)
  .exec()
  .then((dbUser) => {
    dbUser.shopping.cart.push({ qty, productId });
    return dbUser.save({ validateBeforeSave: true });
  })
  .then((savedUser) => {
    console.log('Saved product to the User\'s Shopping Cart!');
    resolve(savedUser);
  })
  .catch(error => reject({
    problem: `Could not save to the Users shopping cart.
    args: {
      userId: ${userId},
      qty: ${qty},
      productId: ${productId},
    }
    Mongo Error: ${error}`,
  }));
});

userSchema.statics.deleteFromCart = ({ userId, productId }) =>
new Promise((resolve, reject) => {
  User.findById(userId)
  .exec()
  .then((dbUser) => {
    dbUser.shopping.cart = dbUser.shopping.cart.filter(cartObj => String(cartObj.productId) !== String(productId));
    return dbUser.save({ validateBeforeSave: true });
  })
  .then((savedUser) => {
    console.log(`
      Deleted Product: ${productId} from User: ${savedUser._id}.
    `);
    resolve(savedUser);
  })
  .catch(error => reject(`
    Could not Delete Product: ${productId} from User: ${userId}.
    Mongo Error = ${error}
  `));
});

userSchema.statics.emptyCart = ({ userId }) =>
new Promise((resolve, reject) => {
  User.findById(userId)
  .exec()
  .then((dbUser) => {
    dbUser.shopping.cart = [];
    return dbUser.save({ validateBeforeSave: true });
  })
  .then((updatedUser) => {
    console.log(`Successfully emptied cart for user: "${updatedUser._id}".`);
    resolve(updatedUser);
  })
  .catch((error => reject(`Failed to empty cart for user: "${userId}".  Error = ${error}`)));
});

userSchema.statics.editToMemberCart = ({ userId, products }) =>
new Promise((resolve, reject) => {
  User.findById(userId)
  .exec()
  .then((dbUser) => {
    dbUser.shopping.cart = products;
    return dbUser.save({ validateBeforeSave: true });
  })
  .then((updatedUser) => {
    console.log(`
      Updated user shopping cart!
    `);
    resolve(updatedUser);
  })
  .catch(error => reject(`
    Could not Update User: ${userId}.

    Mongo Error = ${error}
  `));
});

const User = db.model('User', userSchema);
export default User;
