import { takeLatest } from 'redux-saga';
import API from '../Services/API';

// ----- Sagas ----- //
import GetAllThings from './ThingSagas/GetAllThings';
import CreateThing from './ThingSagas/CreateThing';
import EditThing from './ThingSagas/EditThing';
import RemoveThing from './ThingSagas/RemoveThing';

// ----- Types ----- //
import { ThingTypes } from '../Redux/ThingRedux';

const api = API.createAPI();

export default function* rootSaga() {
  yield [
    takeLatest(ThingTypes.GET_ALL_THINGS, GetAllThings, api),
    takeLatest(ThingTypes.CREATE_THING, CreateThing, api),
    takeLatest(ThingTypes.REMOVE_THING, RemoveThing, api),
    takeLatest(ThingTypes.EDIT_THING, EditThing, api),
  ];
}
