import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import configureStore from './configureStore';
import rootSaga from '../Sagas/';

// ------- Reducer Imports ------- //

// import { thingReducer as things } from '../Redux/ThingRedux';
import { userReducer as user } from './UserRedux';
import { productsReducer as products } from './ProductsRedux';
import { orderReducer as orders } from './OrdersRedux';
import { apiReducer as api } from './ApiRedux';
import { geoReducer as geo } from './GeoRedux';
import { mobileReducer as mobile } from './MobileRedux';
import { localeReducer as locale } from './LocaleRedux';
import { sessionReducer as session } from './SessionRedux';

export default () => {
  const rootReducer = combineReducers({
    user,
    products,
    orders,
    api,
    geo,
    mobile,
    locale,
    session,
    routing: routerReducer,
  });
  return configureStore(rootReducer, rootSaga);
};
