import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { authLocalForage as localForage } from '../../services/utils/localForage';

const { Types, Creators } = createActions({
  authorizationInProgress: null,
  authSocialLogin: ['socialType'],
  loginSuccess: null,
  loginFailure: ['error'],
  loggedOut: null,
});
export const authTypes = Types;
export default Creators;
console.warn(localForage.getItem('loginSuccess'))

const INITIAL_STATE = Immutable({
  authorizationInProgress: false,
  loginSuccess: null,
  loginError: null,
  loggedIn: false,
});

const authorizationInProgress = state => ({
  ...state,
  authorizationInProgress: true,
});

const loginSuccess = (state) => {
  localForage.setItem('loggedIn', true);
  localForage.setItem('loginSuccess', true);
  return ({
    ...state,
    loggedIn: true,
    loginSuccess: true,
  });
};
const loginFailure = (state, { error }) => ({
  loggedIn: false,
  loginSuccess: false,
  loginError: { ...error },
});
const loggedOut = state => ({
  ...state,
  loggedIn: false,
  loginSuccess: null,
});
export const authReducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGGED_OUT]: loggedOut,
  [Types.AUTHORIZATION_IN_PROGRESS]: authorizationInProgress,
});
