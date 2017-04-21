import { select } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

export default function* cleanS3Route() {
  const { locationBeforeTransitions } = yield select(state => state.routing);
  const hash = locationBeforeTransitions.hash;
  const path = (/#!(\/.*)$/.exec(hash) || [])[1];

  if (path) {
    console.warn('#! = true: ', path);
    replace(path);
    return true;
  } else if (/^#access_token.*/.test(hash)) {
    console.warn('#access_token = true: ', hash);
    // replace(`/login/${hash}`);
    return true;
  }
  console.error('cleanS3Route did not clean anything');
  return false;
}
