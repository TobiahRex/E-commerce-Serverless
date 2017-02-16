import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setLanguage: ['language'],
  setCurrency: ['currency'],
  updateGeo: ['ip_address', 'country', 'lat_long'],
});

export const geoTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  active_language: localStorage.getItem('active_language') || 'english',
  ip_address: null,
  country: null,
  lat_long: null,
};

const setLanguage = (state, { language }) => ({
  active_language: language,
  active_currrency: state.active_currency,
  ip_address: state.ip_address,
  country: state.country,
  lat_long: state.lat_long,
});

const setCurrency = (state, { currency }) => ({
  active_language: state.active_language,
  active_currrency: currency,
  ip_address: state.ip_address,
  country: state.country,
  lat_long: state.lat_long,
});

const updateGeo = (state, { ip_address, country, lat_long }) => ({
  active_language: state.active_language,
  ip_address,
  country,
  lat_long,
});

export const geoReducer = createReducer(INITIAL_STATE, {
  [Types.SET_LANGUAGE]: setLanguage,
  [Types.SET_CURRENCY]: setCurrency,
  [Types.UPDATE_GEO]: updateGeo,
});
