import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  receivedPopJuices: ['juiceArray'], // array of objects
  receivedError: ['problem'],
});

export const homepageActions = Types;
export default Creators;

export const INITIAL_STATE = {
  pop_juices: [{
    title: 'Fruity Bamm-Bamm',
    price: '30',
    nicotine_strength: ['2mg', '4mg', '6mg', '8mg'],
    url: '',
  }, {
    title: 'Pina Colada',
    price: '30',
    nicotine_strength: ['2mg', '4mg', '6mg', '8mg'],
    url: '',
  }, {
    title: 'Strawberries N\' Cream',
    price: '30',
    nicotine_strength: ['2mg', '4mg', '6mg', '8mg'],
    url: '',
  }, {
    title: 'Keylime Pie',
    price: '30',
    nicotine_strength: ['2mg', '4mg', '6mg', '8mg'],
    url: '',
  }, {
    title: 'Papple Berry',
    price: '30',
    nicotine_strength: ['2mg', '4mg', '6mg', '8mg'],
    url: '',
  }, {
    title: 'French Vanilla Mocha',
    price: '30',
    nicotine_strength: ['2mg', '4mg', '6mg', '8mg'],
    url: '',
  }],
  error: null,
};

function receivedPopJuices(state, { juiceArray }) {
  return ({
    pop_juices: [...juiceArray],
    error: null,
  });
}

function receivedError({ pop_juices }, { problem }) {
  return ({
    pop_juices,
    error: problem,
  });
}

export const homepageReducer = createReducer(INITIAL_STATE, {
  [Types.RECEIVED_POP_JUICES]: receivedPopJuices,
  [Types.RECEIVED_ERROR]: receivedError,
});
