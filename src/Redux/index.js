import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from '../Sagas/';

// ------- Reducer Imports ------- //

import { thingReducer as things } from '../Redux/ThingRedux';
import { apiReducer as api } from '../Redux/ApiRedux';

export default () => {
  const rootReducer = combineReducers({
    things,
    api,
  });
  return configureStore(rootReducer, rootSaga);
};
