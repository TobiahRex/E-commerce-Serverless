import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setLanguage: ['language'],
  setCurrency: ['currency'],
  setMobileDevice: ['screen_size', 'mobile_type'],
  updateGeo: ['ip_address', 'country', 'lat_long'],
});

export const geoTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  active_language: localStorage.getItem('active_language') || 'english',
  active_currency: 'usd',
  screen_size: null,
  mobile_type: null,
  ip_address: null,
  country: null,
  lat_long: null,
};

const setLanguage = (state, { language }) => ({
  active_language: language,
  active_currency: state.active_currency,
  screen_size: state.screen_size,
  mobile_type: state.mobile_type,
  ip_address: state.ip_address,
  country: state.country,
  lat_long: state.lat_long,
});

const setCurrency = (state, { currency }) => ({
  active_language: state.active_language,
  active_currency: currency,
  screen_size: state.screen_size,
  mobile_type: state.mobile_type,
  ip_address: state.ip_address,
  country: state.country,
  lat_long: state.lat_long,
});

const setMobileDevice = (state, { screen_size, mobile_type }) => ({
  active_language: state.active_language,
  active_currency: state.active_currency,
  screen_size,
  mobile_type,
  ip_address: state.ip_address,
  country: state.country,
  lat_long: state.lat_long,
});

const updateGeo = (state, { ip_address, country, lat_long }) => ({
  active_language: state.active_language,
  active_currency: state.active_currency,
  screen_size: state.screen_size,
  mobile_type: state.mobile_type,
  ip_address,
  country,
  lat_long,
});

export const geoReducer = createReducer(INITIAL_STATE, {
  [Types.SET_LANGUAGE]: setLanguage,
  [Types.SET_CURRENCY]: setCurrency,
  [Types.SET_MOBILE_DEVICE]: setMobileDevice,
  [Types.UPDATE_GEO]: updateGeo,
});
