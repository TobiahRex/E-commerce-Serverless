import { takeLatest } from 'redux-saga/effects';
import TaxRateApi from '../services/api/taxes';
// import distantApi from '../Services/api.distant';

// ----- Sagas ----- //
import getTaxRate from './taxes';

// ----- Types ----- //
import { orderTypes } from '../redux/orders';

const api = TaxRateApi.createAPI();

export default function* rootSaga() {
  yield [
    takeLatest(orderTypes.GET_TAX_RATE, getTaxRate, api),
  ];
}
