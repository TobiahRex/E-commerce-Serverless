import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setLanguage: ['language'],
  setCurrency: ['currency'],
  setCountry: ['country'],
});

export const localeTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  activeLanguage: localStorage.getItem('active_language') || 'english',
  activeCurrency: 'usd',
  country: null,
};

const setLanguage = (state, { language }) => ({
  activeLanguage: language,
  activeCurrency: state.activeCurrency,
  country: state.country,
});

const setCurrency = (state, { currency }) => ({
  activeLanguage: state.activeLanguage,
  activeCurrency: currency,
  country: state.country,
});

const setCountry = (state, { country }) => ({
  activeLanguage: state.activeLanguage,
  activeCurrency: state.activeCurrency,
  country,
});

export const localeReducer = createReducer(INITIAL_STATE, {
  [Types.SET_LANGUAGE]: setLanguage,
  [Types.SET_CURRENCY]: setCurrency,
  [Types.SET_COUNTRY]: setCountry,
});
