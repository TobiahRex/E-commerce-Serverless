import { call, put } from 'redux-saga/effects';
import orderActions from '../../Redux/OrdersRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* getTaxRate(api) {
  const response = yield call(() => api.getTaxRate());

  if (response.ok) {
    console.log('response: ', response);
    const result = JSON.parse(response.data);
    const taxRate = {
      stateRate: result.rates[0].rate / 100,
      cityRate: result.rates[1].rate / 100,
      totalRate: result.totalRate / 100,
    };
    console.log('taxRate: ', taxRate);
    yield [put(orderActions.setTaxRate(taxRate)),
      put(apiActions.apiSuccess())];
  } else {
    yield [put(apiActions.apiFail(response.data))];
  }
}
