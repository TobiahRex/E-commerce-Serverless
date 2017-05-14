import { call, put, take } from 'redux-saga/effects';
import authActions, { authTypes } from '../../redux/orders';
import apiActions from '../../redux/api';
import userApi from '../../services/api/graphQL/users';

const api = userApi.createAPI();

export default function* findOrCreateUser() {
  while (true) { //eslint-disable-line
    const { userObj } = yield take(authTypes.LOGIN_SUCCESS);
    const responses = yield [
      put(apiActions.fetching()),
      call(() => api.findOrCreateUser(userObj)),
    ];
    const response = cleanGQLresponse(responses[1]);
    if (response.ok) {
      yield [
        put(apiActions.apiSuccess()),
        put(authActions.receivedProductById(response.body)),
      ];
    } else {
      yield put(apiActions.apiFail(response.problem));
    }
  }
}

function cleanGQLresponse(response) {
  console.log('GraphQL response: ', response);
  if (response.data) {
    if (response.data.errors) {
      response.problem = response.data.errors[0].message;
      response.ok = false;
    }
    return response;
  }
  response.problem = `GraphQL returned an empty result.
  Are you sure the resource you\'re looking for exists?`;
  response.ok = false;
  return response;
}
