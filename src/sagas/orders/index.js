import { call, put, take } from 'redux-saga/effects';
import apiActions from '../../redux/api';
import orderActions, { orderTypes } from '../../redux/orders';
import sagawaApi from '../../services/api/sagawa';
import cleanSagawaResponse from '../../services/utils/cleanSagawaResponse';

export default function* validatePostal() {
  while(true) { //eslint-disable-line
    const { postal } = yield take(orderTypes.VALIDATE_POSTAL);
    const responses = yield [
      put(apiActions.fetching()),
      call(() => sagawaApi.validatePostal(postal)),
    ];
    console.log('%cSAGAWA POSTAL RESPONSE', 'background:lime;', responses[1]);

    const { ok, problem, data } = cleanSagawaResponse.postal(responses[1]);

    if (ok) {
      yield [
        put(apiActions.apiSuccess()),
        put(orderActions.receivedValidPostal(data.postalInfo)),
      ];
    } else {
      yield put(apiActions.apiFail(problem));
    }
  }
}
