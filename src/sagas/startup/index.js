/* eslint-disable no-constant-condition */
import { call, take, put } from 'redux-saga/effects';
import generateMobileTitleSaga from './generateMobileTitle';
import getTaxRateAsynch from './getTaxRateAsynch';
import cleanS3RouteSaga from './cleanS3Route';

function* startupActions() {
  const results = yield [
    call(cleanS3RouteSaga),
    call(generateMobileTitleSaga),
    call(getTaxRateAsynch),
  ];
  yield put({ type: 'APP_STARTUP_COMPLETE', payload: results });
}

export default function* startup() {
  while (true) {
    yield take('APP_STARTUP');
    yield call(startupActions);
  }
}
