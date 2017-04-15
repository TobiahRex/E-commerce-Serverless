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
  previousPageUrl: '',
  preLoginUrl: '',
  redirecturi: false,
  error: '',
};

const save = (state, { page, url }) => ({
  currentActivePage: page,
  currentActiveUrl: url,
  previousPage: state.currentActivePage,
  previousPageUrl: state.currentActiveUrl,
  preLoginUrl: state.preLoginUrl,
  redirecturi: false,
  error: null,
});

const savePreLoginPage = (state, { url }) => {
  localStorage.setItem('preLoginUrl', url);
  return ({
    currentActivePage: state.currentActivePage,
    currentActiveUrl: state.currentActiveUrl,
    previousPage: state.currentActivePage,
    previousPageUrl: state.currentActiveUrl,
    preLoginUrl: url,
    redirecturi: true,
    error: null,
  });
};


export const sessionReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ACTIVE_PAGE]: save,
  [Types.SAVE_PRELOGIN_PAGE]: savePreLoginPage,
});
