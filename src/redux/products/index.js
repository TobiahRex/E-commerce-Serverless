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
    imageUrl: './Images/nj2jp_juice_card_fbb.png',
  }, {
    title: 'Pina Colada',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './Images/nj2jp_juice_card_pc.png',
  }, {
    title: 'Strawberries N\' Cream',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './Images/nj2jp_juice_card_pc.png',
  }, {
    title: 'Keylime Pie',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './Images/nj2jp_juice_card_klp.png',
  }, {
    title: 'Papple Berry',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './Images/nj2jp_juice_card_klp.png',
  }, {
    title: 'French Vanilla Mocha',
    price: '30',
    nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
    imageUrl: './Images/nj2jp_juice_card_fvm.png',
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
