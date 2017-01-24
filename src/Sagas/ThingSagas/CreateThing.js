import { call, put } from 'redux-saga/effects';
import thingActions from '../../Redux/ThingRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* create(api, { thingName }) {
  const response = yield call(() => api.createThing(thingName));

  if (response.ok) {
    yield [
      put(thingActions.createThingSuccess(response.data)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
