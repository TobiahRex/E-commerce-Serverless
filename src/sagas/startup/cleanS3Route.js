import { select, put } from 'redux-saga/effects';
import { push, replace } from 'react-router-redux';

export default function* cleanS3Route() {
  const { locationBeforeTransitions } = yield select(state => state.routing);

  const hash = locationBeforeTransitions.hash;

  const path = (/#!(\/.*)$/.exec(hash) || [])[1];

  if (path) {
    replace(path);

    yield put(push(path));
  } else if (/^#access_token.*/.test(hash)) {
    const newPath = `/login/${hash}`;
    replace(newPath);

    yield put(push(newPath));
  }
}
