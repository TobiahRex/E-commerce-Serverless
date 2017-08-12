import { call, put, take } from 'redux-saga/effects';
import apiActions from '../../redux/api';
import orderActions, { orderTypes } from '../../redux/orders';
import sagawaApi from '../../services/api/sagawa';
import cleanSagawaResponse from '../../services/utils/cleanSagawaResponse';

export default function* validatePostal() {
  while(true) { //eslint-disable-line
    const { postalCode } = yield take(orderTypes.VALIDATE_POSTAL);

    const responses = yield [
      put(apiActions.fetching()),
      call(() => sagawaApi.validatePostal(postalCode)),
    ];

    const { ok, problem, data } = cleanSagawaResponse.handlePostal(responses[1]);

    if (ok) {
      yield [
        put(apiActions.apiSuccess()),
        put(orderActions.receivedValidPostal(data.postalInfo)),
      ];
    } else {
      yield [
        put(apiActions.apiFail(problem)),
        put(orderActions.receivedInvalidPostal(data.postalInfo)),
      ];
    }
  }
}
