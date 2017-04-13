import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  userLoggedIn: ['time', 'profile'],
  userLoggedOut: null,
  ageVerified: null,
});

export const userTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  loggedIn: false,
  profile: null,
  ageVerified: Boolean(localStorage.getItem('ageVerified')) || false,
};

const loggedIn = (state, { profile }) => ({
  ageVerified: state.age_verified,
  loggedIn: true,
  profile,
});

const loggedOut = state => ({
  ageVerified: state.age_verified,
  loggedIn: false,
  profile: null,
});

const verified = (state) => {
  localStorage.setItem('ageVerified', true);
  return ({
    ageVerified: true,
    loggedIn: state.loggedIn,
    profile: state.profile,
  });
};

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.USER_LOGGED_IN]: loggedIn,
  [Types.USER_LOGGED_OUT]: loggedOut,
  [Types.AGE_VERIFIED]: verified,
});
// ------------------------------  ageVerified: null,
