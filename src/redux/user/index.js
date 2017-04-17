import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  saveProfile: ['profile'],
  removeProfile: null,
  ageVerified: null,
});

export const userTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  profile: null,
  ageVerified: false,
});

const saveProfile = (state, { profile }) => {
  delete profile.clientID;
  // BUG add a check for which social provider they chose.  This line will only work for Twitter.
  profile.picture = profile.picture.replace(/normal/, '400x400');
  return ({
    ...state,
    profile,
  });
};

const removeProfile = state => ({
  ...state,
  profile: null,
});

const verified = state => ({
  ...state,
  ageVerified: true,
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_PROFILE]: saveProfile,
  [Types.REMOVE_PROFILE]: removeProfile,
  [Types.AGE_VERIFIED]: verified,
});
// ------------------------------  ageVerified: null,
