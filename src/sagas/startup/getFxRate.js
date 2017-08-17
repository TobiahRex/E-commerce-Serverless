import { call, put } from 'redux-saga/effects';
import orderActions from '../../redux/orders';
import apiActions from '../../redux/api';
import toasterActions from '../../redux/toaster';
import fxApi from '../../services/api/fx';

export default function* () {
  yield put(apiActions.fetching());

  const {
    ok,
    problem,
    data,
  } = yield call(() => fxApi.getRates('USD'));

  if (ok) {
    yield [
      put(apiActions.apiSuccess()),
      put(orderActions.setFxRate(data.rates.JPY)),
    ];
  } else {
    yield [
      put(toasterActions.toastError(true, problem)),
      put(apiActions.apiFail()),
    ];
  }
}
