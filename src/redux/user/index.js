import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import decode from 'jwt-decode';

const getProfileOrNull = () => {
  let validToken;
  const token = localStorage.getItem('id_token');
  const decoded = decode(token);
  const date = !decoded.exp ? null : new Date(0);
  date.setUTCSeconds(decoded.exp);
  if (date === null) validToken = false;
  validToken = !(date.valueOf() > new Date().valueOf());
  const x = !!token && validToken ? localStorage.getItem('profile') : null;

  console.log('%cx', 'background:red;', x);
  return x;
};

const { Types, Creators } = createActions({
  saveLoginType: ['socialType'],
  saveProfile: ['profile'],
  removeProfile: null,
  ageVerified: null,
});

export const userTypes = Types;
export default Creators;
export const INITIAL_STATE = Immutable({
  profile: getProfileOrNull(),
  ageVerified: !!localStorage.getItem('ageVerified'),
  socialLoginType: localStorage.getItem('socialType'),
});

const saveProfile = (state, { profile }) => {
  localStorage.setItem('profile', profile);
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
