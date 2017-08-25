import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  saveTransaction: ['transaction'],
});

export const checkoutTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  transaction: null,
});

const saveTransaction = (state, { transaction }) => ({
  ...state,
  transaction,
});

export const checkoutReducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_TRANSACTION]: saveTransaction,
});
