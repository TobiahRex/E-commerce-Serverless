import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from '../Sagas/';

// ------- Reducer Imports ------- //

// import { thingReducer as things } from '../Redux/ThingRedux';
import { apiReducer as api } from './ApiRedux';
import { activePageReducer as active_page } from './ActivePageRedux';
import { productsReducer as products } from './ProductsRedux';
import { metaReducer as meta } from './MetaRedux';
import { userReducer as user } from './UserRedux';
import { geoReducer as geo } from './GeoRedux';
import { localeReducer as locale } from './LocaleRedux';

export default () => {
  const rootReducer = combineReducers({
    user,
    products,
    geo,
    locale,
    meta,
    api,
    active_page,
  });
  return configureStore(rootReducer, rootSaga);
};
