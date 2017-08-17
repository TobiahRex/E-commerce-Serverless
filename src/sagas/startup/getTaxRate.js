import { call, put } from 'redux-saga/effects';
import orderActions from '../../redux/orders';
import apiActions from '../../redux/api';
import toasterActions from '../../redux/toaster';
import taxApi from '../../services/api/taxes';

export default function* getTaxRate() {
  yield put(apiActions.fetching());

  const {
    ok,
    data,
    problem,
  } = yield call(() => taxApi.getTaxRate('US', 98101));

  if (ok) {
    const taxRate = {
      stateRate: data.rates[0].rate,
      cityRate: data.rates[2].rate,
      totalRate: data.totalRate,
    };
    yield [
      put(orderActions.setTaxRate(taxRate)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield [
      put(toasterActions.toastError(true, problem)),
      put(apiActions.apiFail()),
    ];
  }
}
