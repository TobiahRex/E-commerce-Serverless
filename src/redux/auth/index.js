import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { isTokenExpired } from '../../services/utils/jwtHelper';

const getLoginStatus = () => {
  const token = localStorage.getItem('id_token');
  if (token) {
    if (!isTokenExpired(token)) return true;

    localStorage.clear();
    return false;
  }
  return false;
};

const { Types, Creators } = createActions({
  loggedOut: null,
  loginSuccess: null,
  loginFailure: ['error'],
  authorizationInProgress: null,
  authSocialLogin: ['socialType'],
});

export const authTypes = Types;

export default Creators;

const INITIAL_STATE = Immutable({
  loggedIn: getLoginStatus(),
  loginError: null,
  authorizationInProgress: false,
});

const authorizationInProgress = state => ({
  ...state,
  authorizationInProgress: true,
});

const loginSuccess = (state) => {
  localStorage.setItem('loggedIn', true);
  return ({
    ...state,
    loggedIn: true,
    authorizationInProgress: false,
  });
};

const loginFailure = (state, { error }) => ({
  loggedIn: false,
  loginError: error,
  authorizationInProgress: false,
});

const loggedOut = state => ({
  ...state,
  loggedIn: false,
  authorizationInProgress: false,
});

export const authReducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGGED_OUT]: loggedOut,
  [Types.AUTHORIZATION_IN_PROGRESS]: authorizationInProgress,
});
