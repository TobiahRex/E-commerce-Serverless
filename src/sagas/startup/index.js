/* eslint-disable no-constant-condition */
import { call, take, put } from 'redux-saga/effects';
import cleanS3RouteSaga from './cleanS3Route';
import generateMobileTitleSaga from './generateMobileTitle';
import getTaxRate from './getTaxRate';
import getGeoLocation from './getGeoLocation';

function* startupActions() {
  const results = yield [
    call(cleanS3RouteSaga),
    call(generateMobileTitleSaga),
    call(getTaxRate),
    call(getGeoLocation),
  ];
  yield put({ type: 'APP_STARTUP_COMPLETE', payload: results });
}

export default function* startup() {
  while (true) {
    yield take('APP_STARTUP');
    yield call(startupActions);
  }
}
