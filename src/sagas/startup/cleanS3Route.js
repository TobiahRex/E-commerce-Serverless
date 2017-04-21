import { select } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

export default function* cleanS3Route() {
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
