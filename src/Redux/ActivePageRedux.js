import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveActivePage: ['page', 'url'],
  saveFail: ['err'],
});

export const LocationTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  current_active_page: '',
  current_active_url: '',
  previous_page: '',
  error: null,
};

const save = (state, { page, url }) => ({
  current_active_page: page,
  current_active_url: url,
  previous_page: state.current_active_page,
  previous_url: state.current_active_url,
  error: null,
});

export const activePageReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ACTIVE_PAGE]: save,
});
