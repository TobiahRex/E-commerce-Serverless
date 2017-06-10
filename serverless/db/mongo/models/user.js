/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import userSchema from '../schemas/userSchema';

export default (db) => {
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

    User.findOne({ 'authentication.auth0Identities.user_id': auth0Id })
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
    dbUser.shopping.cart = [...userObj.shoppingCart];
    dbUser.socialProfileBlob[loginType] = userObj.socialProfileBlob[loginType];

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

  userSchema.statics.addToMemberCart = ({ userId, qty, nicotineStrength, product }) =>
  new Promise((resolve, reject) => {
    User.findById(userId)
    .exec()
    .then((dbUser) => {
      dbUser.shopping.cart.push({
        qty,
        product,
        nicotineStrength,
      });
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
        nicotineStrength: ${nicotineStrength},
        product: ${product},
      }
      Mongo Error: ${error}`,
    }));
  });

  userSchema.statics.deleteFromCart = ({ userId, productId }) =>
  new Promise((resolve, reject) => {
    User.findById(userId)
    .exec()
    .then((dbUser) => {
      dbUser.shopping.cart = dbUser.shopping.cart
      .filter(({ product }) => String(product) !== String(productId));
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
  return User;
};
