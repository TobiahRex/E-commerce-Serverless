import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveActivePage: ['page', 'url'],
  saveFail: ['err'],
});

export const sessionTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  currentActivePage: 'Home',
  currentActiveUrl: '/',
  previousPage: '',
  previousPageUrl: '',
  error: '',
};

const save = (state, { page, url }) => ({
  currentActivePage: page,
  currentActiveUrl: url,
  previousPage: state.currentActivePage,
  previousPageUrl: state.currentActiveUrl,
  error: null,
});

export const sessionReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ACTIVE_PAGE]: save,
});
