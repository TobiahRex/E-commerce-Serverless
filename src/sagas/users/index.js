import { call, put, take } from 'redux-saga/effects';
import userActions, { userTypes } from '../../redux/user';
import apiActions from '../../redux/api';
import userApi from '../../services/api/graphQL/users';
import cleanGQLresponse from '../tools/cleanGQLresponse';

const api = userApi.createAPI();

export default function* fetchUserProfile() {
  while (true) { //eslint-disable-line
    const { userId } = yield take(userTypes.FETCH_USER_PROFILE);
    const responses = yield [
      put(apiActions.fetching()),
      call(() => api.FetchUserProfile(userId)),
    ];
    const { ok, problem, data: { data } } = cleanGQLresponse(responses[1]);
    if (ok) {
      yield [
        put(apiActions.apiSuccess()),
        put(userActions.saveProfile(data.FetchUserProfile)),
      ];
    } else {
      yield put(apiActions.apiFail(problem));
    }
  }
}
