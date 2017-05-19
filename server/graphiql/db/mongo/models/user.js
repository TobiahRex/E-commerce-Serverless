/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import userSchema from '../schemas/userSchema';
import db from '../connection';

userSchema.statics.createUser = userObj =>
new Promise((resolve, reject) => {
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
    return bbPromise.fromCallback(cb =>
      dbUser.save({ validateBeforeSave: true }, cb));
  })
  .then((savedUser) => {
    console.log('Updated the User\'s Shopping Cart.');
    resolve(savedUser);
  })
  .catch(error => reject({
    problem: `Could not save to the Users profile.
    args: {
      userId: ${userId},
      qty: ${qty},
      strength: ${strength},
      product: ${product},
    }
    Mongo Error: ${error}`,
  }));
});
const User = db.model('User', userSchema);
export default User;
