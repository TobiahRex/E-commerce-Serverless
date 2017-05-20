import { put, call } from 'redux-saga/effects';
import apiActions from '../../redux/api';
import productActions from '../../redux/products/';
import productApi from '../../services/api/graphQL/products';
import { cleanGQLresponse } from '../products/';

const api = productApi.createAPI();

export default function* fetchPopularProducts() {
  const response = yield call(() => api.FetchPopularProducts(6));

  const { ok, problem, data } = cleanGQLresponse(response);

  if (ok) {
    yield put(productActions.receivedPopularProducts(data.data.PopularProducts));
  } else {
    yield [
      put(productActions.productRequestError(problem)),
      put(apiActions.apiFail(problem)),
    ];
  }
}
