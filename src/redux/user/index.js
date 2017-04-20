import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  saveLoginType: ['socialType'],
  saveProfile: ['profile'],
  removeProfile: null,
  ageVerified: null,
});

export const userTypes = Types;

export default Creators;

export const INITIAL_STATE = Immutable({
  profile: JSON.parse(localStorage.getItem('profile')) || null,
  ageVerified: !!localStorage.getItem('ageVerified'),
  socialLoginType: JSON.parse(localStorage.getItem('socialType')),
});

const saveProfile = (state, { profile }) => {
  // BUG add a check for which social provider they chose.  This line will only work for Twitter.
  // profile.picture = profile.picture.replace(/normal/, '400x400');
  return ({
    ...state,
    profile,
  });
};

const removeProfile = state => ({
  ...state,
  profile: null,
  socialLoginType: null,
});

const verified = (state) => {
  localStorage.setItem('ageVerified', true);
  return ({
    ...state,
    ageVerified: true,
  });
};
const saveLoginType = (state, { socialType }) => {
  localStorage.setItem('socialType', socialType);
  return ({
    ...state,
    socialLoginType: socialType,
  });
};
export const userReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_PROFILE]: saveProfile,
  [Types.REMOVE_PROFILE]: removeProfile,
  [Types.AGE_VERIFIED]: verified,
  [Types.SAVE_LOGIN_TYPE]: saveLoginType,
});
