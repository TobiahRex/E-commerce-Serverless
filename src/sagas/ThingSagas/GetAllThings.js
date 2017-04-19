import { call, put } from 'redux-saga/effects';
import thingActions from '../../redux/ThingRedux';
import apiActions from '../../redux/api';

export default function* getAll(api) {
  const response = yield call(() => api.getAllThings());

  if (response.ok) {
    yield [
      put(thingActions.getAllThingsSuccess(response.data)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
