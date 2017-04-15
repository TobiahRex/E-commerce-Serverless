import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  userLoggedIn: ['profile'],
  userLoggedOut: null,
  ageVerified: null,
});

export const userTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  loggedIn: false,
  profile: null,
  ageVerified: false,
};

const loggedIn = (state, { profile }) => {
  delete profile.clientID;
  profile.picture = profile.picture.replace(/normal/, '400x400'); // BUG add a check for which social provider they chose.  This line will only work for Twitter.
  return ({
    ageVerified: state.ageVerified,
    loggedIn: true,
    profile,
  });
};

const loggedOut = state => ({
  ageVerified: state.ageVerified,
  loggedIn: false,
  profile: null,
});

const verified = state => ({
  ageVerified: true,
  loggedIn: state.loggedIn,
  profile: state.profile,
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.USER_LOGGED_IN]: loggedIn,
  [Types.USER_LOGGED_OUT]: loggedOut,
  [Types.AGE_VERIFIED]: verified,
});
// ------------------------------  ageVerified: null,
