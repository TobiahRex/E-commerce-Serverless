import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveActivePage: ['page', 'url'],
  savePreloginPage: ['page', 'url'],
  saveFail: ['err'],
});

export const sessionTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  currentActivePage: 'Home',
  currentActiveUrl: '/',
  previousPage: '',
  preLoginPage: '',
  preLoginUrl: '',
  previousPageUrl: '',
  error: '',
};

const save = (state, { page, url }) => ({
  currentActivePage: page,
  currentActiveUrl: url,
  previousPage: state.currentActivePage,
  preLoginPage: state.preLoginPage,
  preLoginUrl: state.preLoginUrl,
  previousPageUrl: state.currentActiveUrl,
  error: null,
});

const savePreLogin = (state, { page, url }) => ({
  currentActivePage: state.currentActivePage,
  currentActiveUrl: state.currentActiveUrl,
  previousPage: state.currentActivePage,
  preLoginPage: page,
  preLoginUrl: url,
  previousPageUrl: state.currentActiveUrl,
  error: null,
});


export const sessionReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ACTIVE_PAGE]: save,
  [Types.SAVE_PRELOGIN_PAGE]: savePreLogin,
});
