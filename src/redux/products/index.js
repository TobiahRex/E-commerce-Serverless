import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  receivedPopJuices: ['juiceArray'], // array of objects
  productsError: ['problem'],
  fetchProductById: ['id'],
  receivedProductById: ['product'],
});

export const productTypes = Types;
export default Creators;
export const INITIAL_STATE = Immutable({
  activeViewProduct: null,
  popJuices: [{
    id: new Buffer('fruity_bamm_bamm', 'utf8').toString('base64'),
    mainTitle: 'Vape Juice',
    title: 'Fruity Bamm-Bamm',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    images: [{ card: '../images/nj2jp_juice_card_fbb.png' }, { large: '../images/nj2jp_fvm.png' }],
    routeTag: 'fruity_bamm_bamm',
  }, {
    id: new Buffer('pina_colada', 'utf8').toString('base64'),
    mainTitle: 'Vape Juice',
    title: 'Pina Colada',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    images: [{ card: '../images/nj2jp_juice_card_pc.png' }, { large: '../images/nj2jp_fvm.png' }],
    routeTag: 'pina_colada',
  }, {
    id: new Buffer('strawberries_n_cream', 'utf8').toString('base64'),
    mainTitle: 'Vape Juice',
    title: 'Strawberries N\' Cream',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    images: [{ card: '../images/nj2jp_juice_card_pc.png' }, { large: '../images/nj2jp_fvm.png' }],
    routeTag: 'strawberries_n_cream',
  }, {
    id: new Buffer('keylime_pie', 'utf8').toString('base64'),
    mainTitle: 'Vape Juice',
    title: 'Keylime Pie',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    images: [{ card: '../images/nj2jp_juice_card_klp.png' }, { large: '../images/nj2jp_fvm.png' }],
    routeTag: 'keylime_pie',
  }, {
    id: new Buffer('papple_berry', 'utf8').toString('base64'),
    mainTitle: 'Vape Juice',
    title: 'Papple Berry',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    images: [{ card: '../images/nj2jp_juice_card_klp.png' }, { large: '../images/nj2jp_fvm.png' }],
    routeTag: 'papple_berry',
  }, {
    id: new Buffer('french_vanilla_mocha', 'utf8').toString('base64'),
    mainTitle: 'Vape Juice',
    title: 'French Vanilla Mocha',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    images: [{ card: '../images/nj2jp_juice_card_fvm.png' }, { large: '../images/nj2jp_fvm.png' }],
    routeTag: 'french_vanilla_mocha',
  }],
  error: null,
});

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
