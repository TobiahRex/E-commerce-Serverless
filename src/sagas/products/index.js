import { call, put, take } from 'redux-saga/effects';
import apiActions from '../../redux/api';
import productActions, { productTypes } from '../../redux/products';
import productApi from '../../services/api/graphql/products';
import cleanGQLresponse from '../tools/cleanGQLresponse';

const api = productApi.createAPI();

export default function* fetchPopularProducts() {
  while (true) { //eslint-disable-line
    const { qty } = yield take(productTypes.FETCH_POPULAR_PRODUCTS);
    const responses = yield [
      put(apiActions.fetching()),
      call(() => api.FetchPopularProducts(qty)),
    ];

    const { ok, problem, data: { data } } = cleanGQLresponse(responses[1]);

    if (ok) {
      yield [
        put(apiActions.apiSuccess()),
        put(productActions.receivedPopularProducts(data.PopularProducts)),
      ];
    } else {
      yield put(apiActions.apiFail(problem));
    }
  }
}
