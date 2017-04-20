import { takeLatest } from 'redux-saga/effects';
import TaxRateApi from '../services/api/taxes';
// import distantApi from '../Services/api.distant';

// ----- Sagas ----- //
import getTaxRate from './taxes';
import authorizationSaga, { watchLoggedInActions } from './authorization';

// ----- Types ----- //
import { orderTypes } from '../redux/orders';
// import { authTypes } from '../redux/auth';

const api = TaxRateApi.createAPI();

export default function* rootSaga() {
  yield [
    watchLoggedInActions(),
    authorizationSaga(),
    takeLatest(orderTypes.GET_TAX_RATE, getTaxRate, api),
    /* TODO: MVP 2
    takeLatest(authTypes.EMAIL_AUTH_IN_PROGRESS, emailAuthInProgress),*/
  ];
}
