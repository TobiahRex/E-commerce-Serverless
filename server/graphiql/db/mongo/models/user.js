/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import userSchema from '../schemas/userSchema';
import db from '../connection';

userSchema.statics.loginOrRegister = (args) =>
new Promise((resolve, reject) => {
  const auth0Id = Object.assign(args.auth0Id);
  delete args.auth0Id;
  

  bbPromise.fromCallback(cb => User.create(userObj, cb))
  .then((newUser) => {
    console.log('New User created!');
    resolve(newUser);
  })
  .catch(error => reject({
    problem: `Could not create new User with this user object: ${userObj}
    Mongo Error: ${error}`,
  }));
});

userSchema.statics.addToMemberCart = ({ userId, qty, strength, product }) =>
new Promise((resolve, reject) => {
  User.findById(userId)
  .exec()
  .then((dbUser) => {
    dbUser.shopping.cart.push({
      qty,
      strength,
      product,
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
      strength: ${strength},
      product: ${product},
    }
    Mongo Error: ${error}`,
  }));
});

userSchema.statics.updateToMemberCart = ({ userId, qty, strength, product }) =>
new Promise((resolve, reject) => {
  User.findById(userId)
  .exec()
  .then((dbUser) => {
    dbUser.shopping.cart
    .filter(cartItem => cartItem.product !== product)
    .push({ qty, strength, product });
    return dbUser.save({ validateBeforeSave: true });
  })
  .then(({ shopping }) => {
    console.log('Updated the User\'s Shopping Cart!');
    resolve(shopping);
  })
  .catch((error) => {
    reject({
      problem: `Could not post udpate to the Users shopping cart.
      args: {
        userId: ${userId},
        qty: ${qty},
        strength: ${strength},
        product: ${product},
      }
      Mongo Error: ${error}`,
    });
  });
});
const User = db.model('User', userSchema);
export default User;
