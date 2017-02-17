import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from '../Sagas/';

// ------- Reducer Imports ------- //

// import { thingReducer as things } from '../Redux/ThingRedux';
import { apiReducer as api } from './ApiRedux';
import { activePageReducer as active_page } from './ActivePageRedux';
import { ageVerificationReducer as age_verification } from './AgeVerificationRedux';
import { productsReducer as products } from './ProductsRedux';
import { geoReducer as geo } from './GeoRedux';
import { userReducer as user } from './UserRedux';

export default () => {
  const rootReducer = combineReducers({
    user,
    products,
    geo,
    api,
    active_page,
    age_verification,
  });
  return configureStore(rootReducer, rootSaga);
};
