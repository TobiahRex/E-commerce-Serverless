import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setMobileDevice: ['mobileType'],
  refreshMobileType: ['mobileTypes'],
  setScreenWidth: ['screenWidth'],
  orientationChanged: ['orientation'],
});

export const mobileTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  screenWidth: null,
  mobileType: null,
  orientation: {
    angle: 0,
    type: '',
    height: 0,
    width: 0,
  },
};

const setMobileDevice = ({ orientation }, { screenWidth, mobileType }) => ({
  screenWidth,
  mobileType,
  orientation,
});

const refreshMobileType = ({ screenWidth, orientation }, { mobileType }) => ({
  screenWidth,
  mobileType,
  orientation,
});

const setScreenWidth = ({ mobileType, orientation }, { screenWidth }) => ({
  screenWidth,
  mobileType,
  orientation,
});

const orientationChanged = ({ screenWidth, mobileType }, { orientation }) => ({
  screenWidth,
  mobileType,
  orientation,
});

export const mobileReducer = createReducer(INITIAL_STATE, {
  [Types.SET_MOBILE_DEVICE]: setMobileDevice,
  [Types.REFRESH_MOBILE_TYPE]: refreshMobileType,
  [Types.SET_SCREEN_WIDTH]: setScreenWidth,
  [Types.ORIENTATION_CHANGED]: orientationChanged,
});
