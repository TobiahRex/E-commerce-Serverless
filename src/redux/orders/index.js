import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addedToCart: ['ip_address', 'lat_long'],
  getTaxRate: null,
  setTaxRate: ['taxRate'],
});

export const orderTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  cart: JSON.parse(localStorage.getItem('guestCart')),
  taxRate: {
    stateRate: 0.060,
    cityRate: 0.030,
    totalRate: 0.090,
  },
});

const addedToCart = (state, { productObj }) => ({
  ...state,
  cart: [...state.cart, productObj],
});

const setTaxRate = (state, { taxRate }) => ({
  ...state,
  taxRate,
});

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.ADDED_TO_CART]: addedToCart,
  [Types.SET_TAX_RATE]: setTaxRate,
});
