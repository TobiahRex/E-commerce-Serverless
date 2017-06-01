import { put, call } from 'redux-saga/effects';
import apiActions from '../../redux/api';
import productActions from '../../redux/products/';
import productApi from '../../services/api/graphQL/products';
import cleanGQLresponse from '../tools/cleanGQLresponse';

const api = productApi.createAPI();

export default function* fetchPopularProducts() {
  const response = yield call(() => api.FetchPopularProducts(6));

  const { ok, problem, data: { data } } = cleanGQLresponse(response);
  if (ok) {
    yield put(productActions.receivedPopularProducts({
      _id: data.docId,
      flavor: data._id,
      title: data.title,
      images: [...data.images],
      routeTag: data.routeTag,
      completedCheckouts: data.completedCheckouts,
    }));
  } else {
    yield [
      put(productActions.productRequestError(problem)),
      put(apiActions.apiFail(problem)),
    ];
  }
}
