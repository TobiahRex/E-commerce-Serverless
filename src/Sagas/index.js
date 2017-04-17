import { takeLatest } from 'redux-saga/effects';
import TaxRateApi from '../services/api/taxes';
// import distantApi from '../Services/api.distant';

// ----- Sagas ----- //
import getTaxRate from './taxes';
import socialLogin from './authorization';

// ----- Types ----- //
import { orderTypes } from '../redux/orders';
import { sessionTypes } from '../redux/session';

const api = TaxRateApi.createAPI();

export default function* rootSaga() {
  yield [
    takeLatest(orderTypes.GET_TAX_RATE, getTaxRate, api),
    takeLatest(sessionTypes.)
  ];
}
