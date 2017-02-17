import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from '../Sagas/';

// ------- Reducer Imports ------- //

// import { thingReducer as things } from '../Redux/ThingRedux';
import { userReducer as user } from './UserRedux';
import { productsReducer as products } from './ProductsRedux';
import { apiReducer as api } from './ApiRedux';
import { geoReducer as geo } from './GeoRedux';
import { mobileReducer as mobile } from './MobileRedux';
import { localeReducer as locale } from './LocaleRedux';

import { activePageReducer as active_page } from './ActivePageRedux';
import { metaReducer as meta } from './MetaRedux';

import { orderReducer as orders } from './OrdersRedux';

export default () => {
  const rootReducer = combineReducers({
    user,
    products,
    orders,
    api,
    geo,
    mobile,
    locale,
    active_page,
  });
  return configureStore(rootReducer, rootSaga);
};
