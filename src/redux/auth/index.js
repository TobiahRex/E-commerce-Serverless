import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  authSocialLogin: ['socialType', 'previousUrl'],
  socialLoginSuccess: null,
  socialLoginFailure: ['error'],
});
export const authTypes = Types;
export default Creators;
export const INITIAL_STATE = {
  success: null,
  error: false,
};

export const socialLoginSuccess = state => ({
  ...state,
  success: true,
});
export const socialLoginFailure = (state, { error }) => ({
  success: false,
  error,
});

export const authReducer = createReducer(INITIAL_STATE, {
  [Types.SOCIAL_LOGIN_SUCCESS]: socialLoginSuccess,
  [Types.SOCIAL_LOGIN_FAILURE]: socialLoginFailure,
});
