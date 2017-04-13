import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveActivePage: ['page', 'url'],
  savePreloginPage: ['url'],
  saveFail: ['err'],
});

export const sessionTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  currentActivePage: 'Home',
  currentActiveUrl: '/',
  previousPage: '',
  preLoginUrl: '',
  previousPageUrl: '',
  error: '',
};

const save = (state, { page, url }) => ({
  currentActivePage: page,
  currentActiveUrl: url,
  previousPage: state.currentActivePage,
  preLoginUrl: state.preLoginUrl,
  previousPageUrl: state.currentActiveUrl,
  error: null,
});

const savePreLoginPage = (state, { url }) => ({
  currentActivePage: state.currentActivePage,
  currentActiveUrl: state.currentActiveUrl,
  previousPage: state.currentActivePage,
  preLoginUrl: url,
  previousPageUrl: state.currentActiveUrl,
  error: null,
});


export const sessionReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ACTIVE_PAGE]: save,
  [Types.SAVE_PRELOGIN_PAGE]: savePreLoginPage,
});
