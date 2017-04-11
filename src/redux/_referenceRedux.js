import { createActions, createReducer } from 'reduxsauce';

// ------- Types & Creators ------- //
const { Types, Creators } = createActions({
  appStartup: null,
  getAllThings: null,
  getAllThingsSuccess: ['things'],
  createThing: ['thingName'],
  createThingSuccess: ['thing'],
  editThing: ['editedThing'],
  editThingSuccess: ['thing'],
  removeThing: ['thingId'],
  removeThingSuccess: ['thing'],
  getThings: null,
});

// ------- Initial State ------- //
export const ThingTypes = Types;
export default Creators;
export const INITIAL_STATE = [];

// ------- Response Actions ------- //
const getAllThingsSuccess = (state, { things }) => things || [];

const createThingSuccess = (state, { thing }) => state.concat(thing);

const editThingSuccess = (state, { thing }) => {
  const newState = state.slice();
  const index = state.findIndex(stateThing => stateThing._id === thing._id);
  newState[index] = thing;
  return newState;
};

const removeThingSuccess = (state, { thing }) =>
state.filter(stateThing => stateThing._id !== thing._id);

// ------- create Reducer ------- //
export const thingReducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_THINGS_SUCCESS]: getAllThingsSuccess,
  [Types.EDIT_THING_SUCCESS]: editThingSuccess,
  [Types.REMOVE_THING_SUCCESS]: removeThingSuccess,
  [Types.CREATE_THING_SUCCESS]: createThingSuccess,
});
