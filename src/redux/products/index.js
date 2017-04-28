import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import productsInitialState from './initial_state';

const { Types, Creators } = createActions({
  receivedPopJuices: ['juiceArray'], // array of objects
  productsError: ['problem'],
  fetchProductById: ['id'],
  receivedProductById: ['product'],
});

export const productTypes = Types;
export default Creators;
export const INITIAL_STATE = Immutable(productsInitialState);

const receivedPopJuices = (state, { juiceArray }) => ({
  ...state,
  popJuices: [...juiceArray],
});

const productsError = (state, { problem }) => ({
  ...state,
  error: problem,
});

const receivedProductById = (state, { product }) => ({
  ...state,
  activeViewProduct: product,
});

export const productsReducer = createReducer(INITIAL_STATE, {
  [Types.RECEIVED_POP_JUICES]: receivedPopJuices,
  [Types.PRODUCTS_ERROR]: productsError,
  [Types.RECEIVED_PRODUCT_BY_ID]: receivedProductById,
});
