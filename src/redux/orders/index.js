import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  getTaxRate: null,
  emptyGuestCart: null,
  setTaxRate: ['taxRate'],
  addToGuestCart: ['productObj'],
  saveGuestCart: ['updatedProducts'],
  validatePostal: ['postalCode'],
  receivedValidPostal: ['postalInfo'],
  receivedInvalidPostal: ['postalInfo'],
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
  postalInfo: {
    error: '',
    sagawaDocId: '',
    jpAddress: '',
    postalCode: '',
    verified: false,
  },
});

const setTaxRate = (state, { taxRate }) => {
  return ({
    ...state,
    taxRate,
  });
};

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

const receivedInvalidPostal = (state, { postalInfo }) => ({
  ...state,
  ...postalInfo,
});

const receivedValidPostal = (state, { postalInfo }) => ({
  ...state,
  ...postalInfo,
});

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.SET_TAX_RATE]: setTaxRate,
  [Types.ADD_TO_GUEST_CART]: addToGuestCart,
  [Types.SAVE_GUEST_CART]: saveGuestCart,
  [Types.EMPTY_GUEST_CART]: emptyGuestCart,
  [Types.RECEIVED_VALID_POSTAL]: receivedValidPostal,
  [Types.RECEIVED_INVALID_POSTAL]: receivedInvalidPostal,
});
