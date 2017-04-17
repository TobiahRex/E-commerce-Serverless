import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveProfile: ['profile'],
  removeProfile: null,
  ageVerified: null,
});

export const userTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  profile: null,
  ageVerified: false,
};

const saveProfile = (state, { profile }) => {
  delete profile.clientID;
  profile.picture = profile.picture.replace(/normal/, '400x400'); // BUG add a check for which social provider they chose.  This line will only work for Twitter.
  return ({
    ...state,
    profile,
  });
};

const removeProfile = state => ({
  ...state,
  loggedIn: false,
  profile: null,
});

const verified = state => ({
  ageVerified: true,
  loggedIn: state.loggedIn,
  profile: state.profile,
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_PROFILE]: saveProfile,
  [Types.REMOVE_PROFILE]: removeProfile,
  [Types.AGE_VERIFIED]: verified,
});
// ------------------------------  ageVerified: null,
