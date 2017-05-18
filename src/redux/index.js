import { ApolloClient } from 'react-apollo';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import configureStore from './store';
import rootSaga from '../sagas/';
// ------- Reducer Imports ------- //

// import { thingReducer as things } from '../redux/ThingRedux';
import { userReducer as user } from './user';
import { productsReducer as products } from './products';
import { orderReducer as orders } from './orders';
import { apiReducer as api } from './api';
import { geoReducer as geo } from './geo';
import { mobileReducer as mobile } from './mobile';
import { localeReducer as locale } from './locale';
import { sessionReducer as session } from './session';
import { authReducer as auth } from './auth';

const client = new ApolloClient();
export default () => {
  const rootReducer = combineReducers({
    apollo: client.reducer(),
    auth,
    user,
    products,
    orders,
    api,
    geo,
    mobile,
    locale,
    session,
    routing,
  });
  return configureStore(rootReducer, rootSaga);
};
