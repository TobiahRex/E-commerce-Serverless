import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { isTokenExpired } from '../../services/utils/jwtHelper';

const getProfileOrNull = () => {
  const token = localStorage.getItem('id_token');
  return (
    !!token && !isTokenExpired(token) ? localStorage.getItem('profile') : null
  );
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
