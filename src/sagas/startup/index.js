/* eslint-disable no-constant-condition */
import { call, take, put, select } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import generateMobileTitle from './generateMobileTitle';
import sessionActions from '../../redux/session';

function* cleanS3Route() {
  const { locationBeforeTransitions } = yield select('routing');
  const hash = locationBeforeTransitions.hash;
  const path = (/#!(\/.*)$/.exec(hash) || [])[1];

  if (path) {
    console.warn('#! = true: ', path);
    replace(path);
  } else if (/^#access_token.*/.test(hash)) {
    console.warn('#access_token = true: ', hash);
    // replace(`/login/${hash}`);
  }
  console.error('cleanS3Route did not clean anything');
}

function* startupActions(history) {
  yield* cleanS3Route(history);
  const { title, url } = yield call(generateMobileTitle);
  yield put(sessionActions.saveActivePage(title, url));
}

export default function* startup() {
  while (true) {
    yield take('APPLICATION_STARTUP');
    yield call(startupActions);
  }
}
