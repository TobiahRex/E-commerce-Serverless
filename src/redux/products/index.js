import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import productsInitialState from './initial_state';

const { Types, Creators } = createActions({
  fetchProductById: ['id'],
  receivedProductById: ['product'],
  fetchPopularProducts: ['qty'],
  receivedPopularProducts: ['products'],
  productRequestError: ['problem'],
});

export const productTypes = Types;
export default Creators;
export const INITIAL_STATE = Immutable(productsInitialState);

const receivedProductById = (state, { product }) => ({
  ...state,
  activeViewProduct: product,
});

const receivedPopularProducts = (state, { products }) => ({
  ...state,
  popularProducts: products,
});

const receivedError = (state, { problem }) => ({
  ...state,
  error: problem,
});

export const productsReducer = createReducer(INITIAL_STATE, {
  [Types.RECEIVED_PRODUCT_BY_ID]: receivedProductById,
  [Types.RECEIVED_POPULAR_PRODUCTS]: receivedPopularProducts,
  [Types.PRODUCT_REQUEST_ERROR]: receivedError,
});
