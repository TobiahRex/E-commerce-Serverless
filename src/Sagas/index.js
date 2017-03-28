import { takeLatest } from 'redux-saga';
import TaxRateApi from '../Services/API/TaxRate';
// import distantApi from '../Services/api.distant';

// ----- Sagas ----- //
import GetTaxRate from './TaxRate';

// ----- Types ----- //
import { OrderTypes } from '../Redux/OrdersRedux';

const api = TaxRateApi.createAPI();

export default function* rootSaga() {
  yield [
    takeLatest(OrderTypes.SET_TAX_RATE, GetTaxRate, api),
  ];
}
