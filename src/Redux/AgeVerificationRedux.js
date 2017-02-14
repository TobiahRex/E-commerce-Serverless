import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  ageVerified: null,
});

export const AgeVerifyTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  age_verified: false,
};

const verified = () => ({
  age_verified: true,
});

export const AgevVerifyReducer = createReducer(INITIAL_STATE, {
  [Types.AGE_VERIFIED]: verified,
});
