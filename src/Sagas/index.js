import { takeLatest } from 'redux-saga/effects';
import TaxRateApi from '../Services/API/TaxRate';
// import distantApi from '../Services/api.distant';

// ----- Sagas ----- //
import getTaxRate from './TaxRate';

// ----- Types ----- //
import { orderTypes } from '../Redux/OrdersRedux';

const api = TaxRateApi.createAPI();

export default function* rootSaga() {
  yield [
    takeLatest(orderTypes.GET_TAX_RATE, getTaxRate, api),
  ];
}
