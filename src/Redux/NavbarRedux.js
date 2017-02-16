import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setLanguage: 'language',
});

export const navbarTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  active_language: localStorage.getItem('active_language') || 'english',
};
