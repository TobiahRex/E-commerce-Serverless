/* eslint-disable no-use-before-define */
import { db } from '../connection';
import { userSchema } from '../schemas/userSchema';

userSchema.statics.createUser = (userInfo, cb) => {
  User.create(userInfo)
  .then(newUser => cb(null, newUser))
  .catch(err => cb({ problem: 'Could not create User.', error: err }, null));
};
const User = db.model('User', userSchema);
export default User;
