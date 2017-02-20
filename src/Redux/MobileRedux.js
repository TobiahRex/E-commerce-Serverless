import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setMobileDevice: ['screenSize', 'mobileType'],
  refreshMobileDevice: ['screenSize', 'mobileTypes'],
  orientationChanged: ['orientation'],
});

export const mobileTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  screenSize: null,
  mobileType: null,
  orientation: {
    angle: 0,
    type: '',
  },
};

const setMobileDevice = ({ orientation }, { screenSize, mobileType }) => ({
  screenSize,
  mobileType,
  orientation,
});

const refreshMobileSize = ({ orientation }, { screenSize, mobileType }) => ({
  screenSize,
  mobileType,
  orientation,
});

const orientationChanged = ({ screenSize, mobileType }, { orientation }) => ({
  screenSize,
  mobileType,
  orientation,
});

export const mobileReducer = createReducer(INITIAL_STATE, {
  [Types.SET_MOBILE_DEVICE]: setMobileDevice,
  [Types.REFRESH_MOBILE_DEVICE]: refreshMobileSize,
  [Types.ORIENTATION_CHANGED]: orientationChanged,
});
