import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import productsInitialState from './initial_state';

const { Types, Creators } = createActions({
  fetchPopularProducts: ['qty'],
  receivedPopularProducts: ['popularProducts'],
  productRequestError: ['problem'],
});

export const productTypes = Types;
export default Creators;
export const INITIAL_STATE = Immutable(productsInitialState);

const receivedPopularProducts = (state, { popularProducts }) => ({
  ...state,
  popularProducts,
});

const receivedError = (state, { problem }) => ({
  ...state,
  error: problem,
});

export const productsReducer = createReducer(INITIAL_STATE, {
  // [Types.RECEIVED_PRODUCT_BY_ID]: receivedProductById,
  [Types.RECEIVED_POPULAR_PRODUCTS]: receivedPopularProducts,
  [Types.PRODUCT_REQUEST_ERROR]: receivedError,
});
