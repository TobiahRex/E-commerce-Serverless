/* eslint-disable no-use-before-define */
import { db } from '../connection';
import { userSchema } from '../schemas/userSchema';

userSchema.statics.createUser = (userInfo, cb) => {
  User.create(userInfo)
  .then(newUser => cb(null, newUser))
  .catch(error => cb({ problem: 'Could not create User.', error }, null));
};
const User = db.model('User', userSchema);
export default User;
