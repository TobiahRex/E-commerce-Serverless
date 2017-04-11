import { call, put } from 'redux-saga/effects';
import thingActions from '../../redux/ThingRedux';
import apiActions from '../../redux/api';

export default function* remove(api, { thingId }) {
  const response = yield call(() => api.removeThing(thingId));

  if (response.ok) {
    yield [
      put(thingActions.removeThingSuccess(response.data)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
