import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  authSocialLogin: ['socialType', 'previousUrl'],
  loginSuccess: null,
  loginFailure: ['error'],
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

export const authReducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
});
