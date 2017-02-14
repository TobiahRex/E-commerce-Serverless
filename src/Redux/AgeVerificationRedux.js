import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  ageVerified: null,
});

export const AgeVerificationTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  age_verified: Boolean(localStorage.getItem('ageVerified')) || false,
};

const verified = () => {
  localStorage.setItem('ageVerified', true);
  return ({
    age_verified: true,
  });
};

export const ageVerificationReducer = createReducer(INITIAL_STATE, {
  [Types.AGE_VERIFIED]: verified,
});
