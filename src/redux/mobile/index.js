import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  setMobileDevice: ['mobileType'],
  refreshMobileType: ['mobileTypes'],
  setScreenWidth: ['screenWidth'],
  orientationChanged: ['orientation'],
});

export const mobileTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  screenWidth: null,
  mobileType: null,
  orientation: {
    angle: 0,
    type: '',
    height: 0,
    width: 0,
  },
});

const setMobileDevice = (state, { screenWidth, mobileType }) => ({
  ...state,
  screenWidth,
  mobileType,
});

const refreshMobileType = (state, { mobileType }) => ({
  ...state,
  mobileType,
});

const setScreenWidth = (state, { screenWidth }) => ({
  ...state,
  screenWidth,
});

const orientationChanged = (state, { orientation }) => ({
  ...state,
  orientation,
});

export const mobileReducer = createReducer(INITIAL_STATE, {
  [Types.SET_MOBILE_DEVICE]: setMobileDevice,
  [Types.REFRESH_MOBILE_TYPE]: refreshMobileType,
  [Types.SET_SCREEN_WIDTH]: setScreenWidth,
  [Types.ORIENTATION_CHANGED]: orientationChanged,
});
