import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setMobileDevice: ['screenSize', 'mobileType'],
});

export const mobileTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  screenSize: null,
  mobileType: null,
};

const setMobileDevice = (state, { screenSize, mobileType }) => ({
  screenSize,
  mobileType,
});

export const mobileReducer = createReducer(INITIAL_STATE, {
  [Types.SET_MOBILE_DEVICE]: setMobileDevice,
});
