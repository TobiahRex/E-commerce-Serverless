import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  toastError: ['error', 'message'],
  toastWarning: ['warning', 'message'],
  toastSuccess: ['success', 'message'],
  clearToaster: null,
});

export const errorTypes = Types;

export default Creators;

const INITIAL_STATE = Immutable({
  error: false,
  warning: false,
  success: false,
  message: {
    en: '',
    ja: '',
  },
});

const toastError = (state, { error, message }) => ({
  ...state,
  error,
  message,
});

const toastWarning = (state, { warning, message }) => ({
  ...state,
  warning,
  message,
});

const toastSuccess = (state, { success, message }) => ({
  ...state,
  success,
  message,
});

const clearToaster = () => ({
  error: false,
  warning: false,
  success: false,
  message: {
    en: '',
    ja: '',
  },
});

export const toasterReducer = createReducer(INITIAL_STATE, {
  [Types.TOAST_ERROR]: toastError,
  [Types.TOAST_WARNING]: toastWarning,
  [Types.TOAST_SUCCESS]: toastSuccess,
  [Types.CLEAR_TOASTER]: clearToaster,
});
