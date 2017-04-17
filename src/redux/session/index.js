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
  ...state,
  currentActivePage: page,
  currentActiveUrl: url,
});
const savePreLoginPage = (state, { url }) => ({
  ...state,
  preLoginUrl: url,
  redirectUri: true,
});
const resetRedirectUri = state => ({
  ...state,
  preLoginUrl: '',
  redirectUri: false,
});
export const sessionReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ACTIVE_PAGE]: save,
  [Types.SAVE_PRELOGIN_PAGE]: savePreLoginPage,
  [Types.RESET_REDIRECT_URI]: resetRedirectUri,
});
