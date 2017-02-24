import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  addedToCart: ['ip_address', 'lat_long'],
  setTaxRate: ['taxRate'],
});

export const orderTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  cart: [],
  taxRate: {
    totalRate: 0.090,
    cityRate: 0.030,
    stateRate: 0.060,
  },
};

const addedToCart = (state, { productObj }) => ({
  cart: [...state.cart, productObj],
  taxRate: state.taxRate,
});

const setTaxRate = (state, { taxRate }) => ({
  cart: [...state.cart],
  taxRate,
});

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.ADDED_TO_CART]: addedToCart,
  [Types.SET_TAX_RATE]: setTaxRate,
});
