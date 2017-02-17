import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setMobileDevice: ['screen_size', 'mobile_type'],
});

export const metaTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  screen_size: null,
  mobile_type: null,
};

const setMobileDevice = (state, { screen_size, mobile_type }) => ({
  screen_size,
  mobile_type,
});

export const metaReducer = createReducer(INITIAL_STATE, {
  [Types.SET_MOBILE_DEVICE]: setMobileDevice,
});
