import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  socialLogin: null,
});
export const authTypes = Types;
export default Creators;
export const INITIAL_STATE = {
  preLoginUrl: '',
  redirectUri: '',
};

export const socialLogin = (state, { preLoginUrl }) => ({
  ...state,
  preLoginUrl,
});

export const authReducer = createReducer(INITIAL_STATE, {
  [Types.SOCIAL_LOGIN]: socialLogin,
});
