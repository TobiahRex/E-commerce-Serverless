import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import initialState from './initialState/';

const { Types, Creators } = createActions({
  setLanguage: ['language'],
  setCountry: ['country'],
});

export const localeTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable(initialState);

const setLanguage = (state, { language }) => ({
  ...state,
  activeLanguage: language,
});

const setCountry = (state, { country }) => ({
  ...state,
  country,
});

export const localeReducer = createReducer(INITIAL_STATE, {
  [Types.SET_LANGUAGE]: setLanguage,
  [Types.SET_COUNTRY]: setCountry,
});
