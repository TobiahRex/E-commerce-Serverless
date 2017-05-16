/* eslint-disable no-use-before-define */
import { Promise as bbPromise } from 'bluebird';
import userSchema from '../schemas/userSchema';

export default function* UserModelGenerator(db) {
  userSchema.statics.createUser = userObj =>
  new Promise((resolve, reject) => {
    bbPromise.fromCallback(cb => User.create(userObj, cb))
    .then(resolve)
    .catch(error => reject({ problem: `Could not create user with this user object: ${userObj}
    Mongo Error = ${error}` }));
  });
  const User = yield db.model('User', userSchema);
  yield User;
}
