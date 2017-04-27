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
    id: new Buffer('fruity_bamm_bamm', 'utf8').toString('base64'),
    title: 'Fruity Bamm-Bamm',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: '../images/nj2jp_juice_card_fbb.png',
    routeTag: 'fruity_bamm_bamm',
  }, {
    id: new Buffer('pina_colada', 'utf8').toString('base64'),
    title: 'Pina Colada',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: '../images/nj2jp_juice_card_pc.png',
    routeTag: 'pina_colada',
  }, {
    id: new Buffer('strawberries_n_cream', 'utf8').toString('base64'),
    title: 'Strawberries N\' Cream',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: '../images/nj2jp_juice_card_pc.png',
    routeTag: 'strawberries_n_cream',
  }, {
    id: new Buffer('keylime_pie', 'utf8').toString('base64'),
    title: 'Keylime Pie',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: '../images/nj2jp_juice_card_klp.png',
    routeTag: 'keylime_pie',
  }, {
    id: new Buffer('papple_berry', 'utf8').toString('base64'),
    title: 'Papple Berry',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: '../images/nj2jp_juice_card_klp.png',
    routeTag: 'papple_berry',
  }, {
    id: new Buffer('french_vanilla_mocha', 'utf8').toString('base64'),
    title: 'French Vanilla Mocha',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: '../images/nj2jp_juice_card_fvm.png',
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
