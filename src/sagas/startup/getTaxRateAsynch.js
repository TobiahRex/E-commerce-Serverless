import { call, put } from 'redux-saga/effects';
import orderActions from '../../redux/orders';
import apiActions from '../../redux/api';
import taxApi from '../../services/api/taxes';

export default function* getTaxRate() {
  const response = yield call(() => taxApi.getTaxRate());

  if (response.ok) {
    const taxRate = {
      stateRate: response.data.rates[0].rate / 100,
      cityRate: response.data.rates[1].rate / 100,
      totalRate: response.data.totalRate / 100,
    };
    yield [put(orderActions.setTaxRate(taxRate)),
      put(apiActions.apiSuccess())];
  } else {
    yield [put(apiActions.apiFail(response.data))];
  }
}
