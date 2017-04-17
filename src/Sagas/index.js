import { takeLatest } from 'redux-saga/effects';
import TaxRateApi from '../services/api/taxes';
// import distantApi from '../Services/api.distant';

// ----- Sagas ----- //
import getTaxRate from './taxes';
import Auth0SocialLogin from './authorization';

// ----- Types ----- //
import { orderTypes } from '../redux/orders';
import { authTypes } from '../redux/auth';

const api = TaxRateApi.createAPI();

export default function* rootSaga() {
  yield [
    takeLatest(orderTypes.GET_TAX_RATE, getTaxRate, api),
    takeLatest(authTypes.SOCIAL_LOGIN, Auth0SocialLogin),
  ];
}
