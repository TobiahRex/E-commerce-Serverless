import { put } from 'redux-saga/effects';
import productActions from '../../redux/products/';

export default function* startupFetchPopularProduct() {
  yield put(productActions.fetchPopularProducts());
}
