import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  addedToCart: ['ip_address', 'lat_long'],
});

export const orderTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  cart: [],
};

const addedToCart = (state, { productObj }) => ({
  cart: [...state.cart, productObj],
});

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.ADDED_TO_CART]: addedToCart,
});
