import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  receivedPopJuices: ['juiceArray'], // array of objects
  productsError: ['problem'],
});

export const homepageActions = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  popJuices: [{
    title: 'Fruity Bamm-Bamm',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './images/nj2jp_juice_card_fbb.png',
    routeTag: 'fruity_bamm_bamm',
  }, {
    title: 'Pina Colada',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './images/nj2jp_juice_card_pc.png',
    routeTag: 'pina_colada',
  }, {
    title: 'Strawberries N\' Cream',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './images/nj2jp_juice_card_pc.png',
    routeTag: 'strawberries_n_cream',
  }, {
    title: 'Keylime Pie',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './images/nj2jp_juice_card_klp.png',
    routeTag: 'keylime_pie',
  }, {
    title: 'Papple Berry',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './images/nj2jp_juice_card_klp.png',
    routeTag: 'papple_berry',
  }, {
    title: 'French Vanilla Mocha',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './images/nj2jp_juice_card_fvm.png',
    routeTag: 'french_vanilla_mocha',
  }],
  error: null,
});

function receivedPopJuices(state, { juiceArray }) {
  return ({
    popJuices: [...juiceArray],
    error: null,
  });
}

function productsError(state, { problem }) {
  return ({
    ...state,
    error: problem,
  });
}

export const productsReducer = createReducer(INITIAL_STATE, {
  [Types.RECEIVED_POP_JUICES]: receivedPopJuices,
  [Types.PRODUCTS_ERROR]: productsError,
});
