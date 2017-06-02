import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  authorizationInProgress: null,
  authSocialLogin: ['socialType'],
  loginSuccess: null,
  loginFailure: ['error'],
  loggedOut: null,
});

export const authTypes = Types;

export default Creators;

const INITIAL_STATE = Immutable({
  loggedIn: JSON.parse(localStorage.getItem('loggedIn')) || false,
  loginError: null,
  loginSuccess: JSON.parse(localStorage.getItem('loginSuccess')),
  authorizationInProgress: false,
});

const authorizationInProgress = state => ({
  ...state,
  authorizationInProgress: true,
});

const loginSuccess = (state) => {
  localStorage.setItem('loggedIn', true);
  localStorage.setItem('loginSuccess', true);
  return ({
    ...state,
    loggedIn: true,
    loginSuccess: true,
    authorizationInProgress: false,
  });
};

const loginFailure = (state, { error }) => ({
  loggedIn: false,
  loginError: error,
  loginSuccess: false,
  authorizationInProgress: false,
});

const loggedOut = state => ({
  ...state,
  loggedIn: false,
  loginSuccess: null,
  authorizationInProgress: false,
});

export const authReducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGGED_OUT]: loggedOut,
  [Types.AUTHORIZATION_IN_PROGRESS]: authorizationInProgress,
});
