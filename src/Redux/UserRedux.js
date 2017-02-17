import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  userLoggedIn: 'time',
  ageVerified: null,
});

export const userActions = Types;
export default Creators;

export const INITIAL_STATE = {
  age_verified: false,
  logged_in: false,
};

const loggedIn = state => ({
  age_verified: state.age_verified,
  logged_in: true,
});

const verified = state => ({
  age_verified: true,
  logged_in: state.logged_in,
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.USER_LOGGED_IN]: loggedIn,
  [Types.AGE_VERIFIED]: verified,
});
