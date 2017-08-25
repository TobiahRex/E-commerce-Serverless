import { put, call } from 'redux-saga/effects';
import apiActions from '../../redux/api';
import productActions from '../../redux/products';
import toasterActions from '../../redux/toaster';
import productApi from '../../services/api/graphql/products';
import cleanGQLresponse from '../tools/cleanGQLresponse';

const api = productApi.createAPI();

export default function* fetchPopularProducts() {
  yield put(apiActions.fetching());

  const response = yield call(() => api.FetchPopularProducts(6));
  console.log('response: ', response);
  const { ok, problem, data: { data: { PopularProducts } } } = cleanGQLresponse(response);

  const popularProducts = PopularProducts.map(productObj => ({
    _id: productObj.docId,
    flavor: productObj._id,
    title: productObj.title,
    images: [...productObj.images],
    slug: productObj.slug,
    completedCheckouts: productObj.completedCheckouts,
  }));

  if (ok) {
    yield [
      put(productActions.receivedPopularProducts(popularProducts)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield [
      put(productActions.productRequestError(problem)),
      put(toasterActions.toastError(true, problem)),
      put(apiActions.apiFail()),
    ];
  }
}
