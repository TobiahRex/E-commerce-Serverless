import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from '../Sagas/';

// ------- Reducer Imports ------- //

// import { thingReducer as things } from '../Redux/ThingRedux';
import { apiReducer as api } from '../Redux/ApiRedux';
import { activePageReducer as active_page } from '../Redux/ActivePageRedux';

export default () => {
  const rootReducer = combineReducers({
    api,
    active_page,
  });
  return configureStore(rootReducer, rootSaga);
};
