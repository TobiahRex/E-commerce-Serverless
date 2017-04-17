import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  authSocialLogin: ['socialType', 'previousUrl'],
  loginSuccess: null,
  loginFailure: ['error'],
  loggedOut: null,
});
export const authTypes = Types;
export default Creators;
export const INITIAL_STATE = {
  loginSuccess: null,
  loginError: false,
  loggedIn: false,
};

const loginSuccess = state => ({
  ...state,
  loggedIn: true,
  loginSuccess: true,
});
const loginFailure = (state, { error }) => ({
  loggedIn: false,
  loginSuccess: false,
  loginError: error,
});
const loggedOut = state => ({
  ...state,
  loggedIn: false,
});
export const authReducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGGED_OUT]: loggedOut,
});
