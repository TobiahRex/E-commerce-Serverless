import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveActivePage: ['page', 'url'],
  savePreloginPage: ['url'],
  saveFail: ['err'],
  resetRedirectUri: null,
});
export const sessionTypes = Types;
export default Creators;
export const INITIAL_STATE = {
  currentActivePage: 'Home',
  currentActiveUrl: '/',
  previousPage: '',
  previousPageUrl: '',
  preLoginUrl: '',
  redirectUri: false,
  error: '',
};

const save = (state, { page, url }) => ({
  currentActivePage: page,
  currentActiveUrl: url,
  previousPage: state.currentActivePage,
  previousPageUrl: state.currentActiveUrl,
  preLoginUrl: state.preLoginUrl,
  redirectUri: false,
  error: null,
});
const savePreLoginPage = (state, { url }) => ({
  currentActivePage: state.currentActivePage,
  currentActiveUrl: state.currentActiveUrl,
  previousPage: state.currentActivePage,
  previousPageUrl: state.currentActiveUrl,
  preLoginUrl: url,
  redirectUri: true,
  error: null,
});
const resetRedirectUri = state => ({
  currentActivePage: state.currentActivePage,
  currentActiveUrl: state.currentActiveUrl,
  previousPage: state.currentActivePage,
  previousPageUrl: state.currentActiveUrl,
  preLoginUrl: '',
  redirectUri: false,
  error: null,
});
export const sessionReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ACTIVE_PAGE]: save,
  [Types.SAVE_PRELOGIN_PAGE]: savePreLoginPage,
  [Types.RESET_REDIRECT_URI]: resetRedirectUri,
});
