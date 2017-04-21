/* eslint-disable no-constant-condition */
import { call, take, put, fork } from 'redux-saga/effects';
import cleanS3RouteSaga from './cleanS3Route';
import getTaxRate from './getTaxRate';
import getGeoLocation from './getGeoLocation';
import mobileDetection from './mobileDetection';

function* startupActions() {
  const results = yield [
    call(cleanS3RouteSaga),
    call(getTaxRate),
    call(getGeoLocation),
    call(mobileDetection),
  ];
  console.warn('finished: ', results);
}

export default function* startup() {
  yield take('APP_STARTUP');
  yield call(startupActions);
  yield put({ type: 'APP_STARTUP_COMPLETE' });
}
