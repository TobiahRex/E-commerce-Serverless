import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  receivedError: ['error', 'message'],
  receivedWarning: ['warning', 'message'],
  receivedSuccess: ['success', 'message'],
  clearNotification: null,
});

export const errorTypes = Types;

export default Creators;

const INITIAL_STATE = Immutable({
  error: false,
  warning: false,
  success: false,
  message: '',
});

const receivedError = (state, { error, message }) => ({
  ...state,
  error,
  message,
});

const receivedWarning = (state, { warning, message }) => ({
  ...state,
  warning,
  message,
});

const receivedSuccess = (state, { success, message }) => ({
  ...state,
  success,
  message,
});

const clearNotification = () => ({
  error: false,
  warning: false,
  success: false,
  message: '',
});

export const notificationReducer = createReducer(INITIAL_STATE, {
  [Types.RECEIVED_ERROR]: receivedError,
  [Types.RECEIVED_WARNING]: receivedWarning,
  [Types.RECEIVED_SUCCESS]: receivedSuccess,
  [Types.CLEAR_NOTIFICATION]: clearNotification,
});
