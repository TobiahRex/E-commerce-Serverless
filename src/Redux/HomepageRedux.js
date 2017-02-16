import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  receivedPopJuices: ['juiceArray'], // array of objects
  receivedError: ['problem'],
});

export const homepageActions = Types;
export default Creators;

export const INITIAL_STATE = {
  pop_juices: [],
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
