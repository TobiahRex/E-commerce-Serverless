import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    first: { type: String },
    last: { type: String },
    display: { type: String },
  },
  authentication: {
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    signedUp: {
      type: Date,
      default: Date.now,
    },
    registered: {
      type: Date,
      default: Date.now,
    },
    password: { type: String },
    avatar: {
      type: String,
      default: 'https://s3-ap-northeast-1.amazonaws.com/nj2jp-react/default-user.png',
    },
  },
  contact: {
    email: { type: String },
    phone: { type: Number },
    location: {
      ipAddress: { type: String },
      lat: { type: String },
      long: { type: String },
      country: { type: String },
    },
  },
  purchases: {
    orders: [{
      type: 
    }]
  }
  permissions: {
    role: {
      type: String,
      enum: ['user', 'admin', 'devAdmin', 'wholeseller', 'distributor'],
      required: true,
    },
  },
  userStory: {
    age: { type: Number },
    birthday: { type: Date },
    bio: { type: String },
  },
  socialBlob: {},
});

userSchema.statics.findByFirebaseId = (firebaseId, cb) => {
  if (!firebaseId) return cb({ error: 'Missing required firebase id' });

  return User.find({ uid_firebase: firebaseId })
  .then((dbUsers) => {
    if (dbUsers.length) return cb(null, dbUsers[0]);
    return cb({ error: 'There are no db Users registered with that uid.' });
  })
  .catch(error => cb({ error }));
};

userSchema.statics.addNewUser = (userObj, cb) => {
  if (!userObj) return cb({ error: 'Missing user object' });

  return User.create(userObj)
  .then((dbUser) => {
    const dbUserRef = dbUser;
    delete dbUserRef.password;
    delete dbUserRef.email;
    return cb(null, dbUser);
  })
  .catch(error => cb({ error }));
};

const User = mongoose.model('User', userSchema);
export default User;


const Users = mongoose.model('Products', usersSchema);
export default Users;
