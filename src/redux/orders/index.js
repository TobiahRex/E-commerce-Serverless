import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  getTaxRate: null,
  setTaxRate: ['taxRate'],
  addToGuestCart: ['productObj'],
  updateToGuestCart: ['updatedProducts'],
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
});

const setTaxRate = (state, { taxRate }) => ({
  ...state,
  taxRate,
});

const addToGuestCart = (state, { productObj }) => ({
  ...state,
  cart: [...state.cart, { ...productObj }],
});

const updateToGuestCart = (state, { updatedProducts }) => ({
  ...state,
  cart: [...updatedProducts],
});

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.SET_TAX_RATE]: setTaxRate,
  [Types.ADD_TO_GUEST_CART]: addToGuestCart,
  [Types.UPDATE_TO_GUEST_CART]: updateToGuestCart,
});
