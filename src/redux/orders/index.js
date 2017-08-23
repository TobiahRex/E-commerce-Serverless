import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  getTaxRate: null,
  emptyGuestCart: null,
  setTaxRate: ['taxRate'],
  setFxRate: ['exchangeRate'],
  addToGuestCart: ['productObj'],
  saveGuestCart: ['updatedProducts'],
  validatePostal: ['postalCode'],
  gotValidPostal: ['postalInfo'],
  gotInvalidPostal: ['error'],
  saveTransaction: ['transaction'],
});

export const orderTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  cart: JSON.parse(localStorage.getItem('guestCart')) || [],
  taxRate: {
    stateRate: 0.060,
    cityRate: 0.030,
    totalRate: 0.090,
  },
  exchangeRate: {
    JPY: 0,
  },
  postalInfo: {
    error: false,
    jpAddress: '',
    postalCode: '',
    verified: false,
  },
  transaction: null,
});

const setTaxRate = (state, { taxRate }) => ({
  ...state,
  taxRate,
});

const setFxRate = (state, { exchangeRate: { JPY } }) => ({
  ...state,
  exchangeRate: {
    JPY,
  },
});

const addToGuestCart = (state, { productObj }) => ({
  ...state,
  cart: [...state.cart, { ...productObj }],
});

const saveGuestCart = (state, { updatedProducts }) => ({
  ...state,
  cart: [...updatedProducts],
});

const emptyGuestCart = (state) => {
  localStorage.removeItem('guestCart');
  return ({
    ...state,
    cart: [],
  });
};

const gotValidPostal = (state, { postalInfo }) => ({
  ...state,
  postalInfo: {
    error: false,
    ...postalInfo,
  },
});

const gotInvalidPostal = (state, { error }) => ({
  ...state,
  postalInfo: {
    ...state.postalInfo,
    error,
  },
});

const saveTransaction = (state, { transaction }) => ({
  ...state,
  transaction,
});

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.SET_TAX_RATE]: setTaxRate,
  [Types.SET_FX_RATE]: setFxRate,
  [Types.ADD_TO_GUEST_CART]: addToGuestCart,
  [Types.SAVE_GUEST_CART]: saveGuestCart,
  [Types.EMPTY_GUEST_CART]: emptyGuestCart,
  [Types.GOT_VALID_POSTAL]: gotValidPostal,
  [Types.GOT_INVALID_POSTAL]: gotInvalidPostal,
  [Types.SAVE_TRANSACTION]: saveTransaction,
});
