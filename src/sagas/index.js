import { takeLatest } from 'redux-saga/effects';
import TaxRateApi from '../services/api/taxes';
// import distantApi from '../Services/api.distant';

// ----- Sagas ----- //
import getTaxRate from './taxes';
import authorizationSaga, { watchAuthActions } from './authorization';

// ----- Types ----- //
import { orderTypes } from '../redux/orders';
// import { authTypes } from '../redux/auth';

const taxApi = TaxRateApi.createTaxAPI();

export default function* rootSaga() {
  yield [
    watchAuthActions(),
    authorizationSaga(),
    takeLatest(orderTypes.GET_TAX_RATE, getTaxRate, taxApi),
    /* TODO: MVP 2
    takeLatest(authTypes.EMAIL_AUTH_IN_PROGRESS, emailAuthInProgress),*/
  ];
}
