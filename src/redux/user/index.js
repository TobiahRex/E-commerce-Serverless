import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  userLoggedIn: ['time', 'profile'],
  ageVerified: null,
});

export const userTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  ageVerified: Boolean(localStorage.getItem('ageVerified')) || false,
  loggedIn: false,
  profile: null,
  time: null,
};

const loggedIn = (state, { profile, time }) => ({
  ageVerified: state.age_verified,
  loggedIn: true,
  profile,
  time,
});

const verified = (state) => {
  localStorage.setItem('ageVerified', true);
  return ({
    ageVerified: true,
    loggedIn: state.loggedIn,
    profile: state.profile,
    time: state.time,
  });
};

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.USER_LOGGED_IN]: loggedIn,
  [Types.AGE_VERIFIED]: verified,
});
// ------------------------------  ageVerified: null,
