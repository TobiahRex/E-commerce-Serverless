/* eslint-disable no-constant-condition */
import { call, take } from 'redux-saga/effects';
import cleanS3RouteSaga from './cleanS3Route';
import getTaxRate from './getTaxRate';
import getGeoLocation from './getGeoLocation';
import mobileDetection from './mobileDetection';
import generateMobileTitle from './generateMobileTitle';

function* startupActions() {
  yield [
    call(cleanS3RouteSaga),
    call(getTaxRate),
    call(getGeoLocation),
    call(mobileDetection),
    call(generateMobileTitle),
  ];
}

export default function* startup() {
  yield take('APP_STARTUP');
  yield call(startupActions);
}
