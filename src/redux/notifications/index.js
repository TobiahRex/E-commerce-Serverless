import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  receivedError: [error],
  clearedError: null,
});

export const errorTypes = Types;

export default Creators;

const INITIAL_STATE = Immutable({
  error: {
    hard: false,
    soft: false,
    
  }
})
