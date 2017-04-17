import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  setLanguage: ['language'],
  setCurrency: ['currency'],
  setCountry: ['country'],
});

export const localeTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  activeLanguage: 'english',
  activeCurrency: 'usd',
  country: null,
});

const setLanguage = (state, { language }) => ({
  activeLanguage: language,
  ...state,
});

const setCurrency = (state, { currency }) => ({
  ...state,
  activeCurrency: currency,
});

const setCountry = (state, { country }) => ({
  ...state,
  country,
});

export const localeReducer = createReducer(INITIAL_STATE, {
  [Types.SET_LANGUAGE]: setLanguage,
  [Types.SET_CURRENCY]: setCurrency,
  [Types.SET_COUNTRY]: setCountry,
});
