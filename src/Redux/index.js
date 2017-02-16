import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from '../Sagas/';

// ------- Reducer Imports ------- //

// import { thingReducer as things } from '../Redux/ThingRedux';
import { apiReducer as api } from './ApiRedux';
import { activePageReducer as active_page } from './ActivePageRedux';
import { ageVerificationReducer as age_verification } from './AgeVerificationRedux';
import { homepageReducer as homepage } from './HomepageRedux';
import { geoReducer as geo } from './GeoRedux';

export default () => {
  const rootReducer = combineReducers({
    geo,
    api,
    active_page,
    age_verification,
    homepage,
  });
  return configureStore(rootReducer, rootSaga);
};
