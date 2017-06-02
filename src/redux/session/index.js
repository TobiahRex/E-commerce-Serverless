import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { auth as AuthService } from '../../navigation/routes';

const { Types, Creators } = createActions({
  saveActivePage: ['page', 'url'],
  savePreloginPage: ['url'],
  saveFail: ['err'],
  resetPreLoginUrl: null,
  goToPreloginUrl: null,
});
export const sessionTypes = Types;
export default Creators;
export const INITIAL_STATE = Immutable({
  currentActivePage: 'Home',
  currentActiveUrl: '/',
  previousPage: '',
  previousPageUrl: '',
  preLoginUrl: '',
  error: '',
});

const save = (state, { page, url }) => ({
  ...state,
  previousPage: state.currentActivePage,
  previousPageUrl: state.currentActiveUrl,
  currentActivePage: page,
  currentActiveUrl: url,
});
const savePreloginPage = state => ({
  ...state,
  preLoginUrl: state.previousPageUrl || '/',
});
const resetPreLoginUrl = (state) => {
  AuthService.emit('prelogin_url', state.preLoginUrl);
  return ({
    ...state,
    preLoginUrl: '/',
  });
};
export const sessionReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ACTIVE_PAGE]: save,
  [Types.SAVE_PRELOGIN_PAGE]: savePreloginPage,
  [Types.RESET_PRELOGIN_URL]: resetPreLoginUrl,
});
