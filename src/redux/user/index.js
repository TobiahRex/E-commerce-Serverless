import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  userLoggedIn: 'time',
  ageVerified: null,
});

export const userTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  ageVerified: Boolean(localStorage.getItem('ageVerified')) || false,
  loggedIn: false,
};

const loggedIn = state => ({
  ageVerified: state.age_verified,
  loggedIn: true,
});

const verified = (state) => {
  localStorage.setItem('ageVerified', true);
  return ({
    ageVerified: true,
    loggedIn: state.loggedIn,
  });
};

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.USER_LOGGED_IN]: loggedIn,
  [Types.AGE_VERIFIED]: verified,
});
// ------------------------------  ageVerified: null,
