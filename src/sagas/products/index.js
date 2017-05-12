import { call, put, take } from 'redux-saga/effects';
import apiActions from '../../redux/api';
import productActions, { productTypes } from '../../redux/products';
import productApi from '../../services/api/graphQL';

const api = productApi.createAPI();

export function* fetchProductById() {
  while (true) {  //eslint-disable-line
    const { id } = yield take(productTypes.FETCH_PRODUCT_BY_ID);
    const responses = yield [
      put(apiActions.fetching()),
      call(() => api.fetchProductById(id)),
    ];
    const response = responses[1];
    console.log('GraphQL response: ', response);
    if (response.ok) {
      yield [
        put(apiActions.apiSuccess()),
        put(productActions.receivedProductById(response.body)),
      ];
    } else {
      yield put(apiActions.apiFail(response.problem));
    }
  }
}

export function* fetchPopularProducts() {
  while (true) { //eslint-disable-line
    const { qty } = yield take(productTypes.FETCH_POPULAR_PRODUCTS);
    const responses = yield [
      put(apiActions.fetching()),
      call(() => api.fetchPopularProducts(qty)),
    ];
    const response = responses[1];
    console.log('GraphQL response: ', response);
    if (response.ok) {
      yield [
        put(apiActions.apiSuccess()),
        put(productActions.receivedPopularProducts(response.body)),
      ];
    } else {
      yield put(apiActions.apiFail(response.problem));
    }
  }
}
