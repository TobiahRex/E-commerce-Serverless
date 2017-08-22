/* eslint-disable no-constant-condition */
import { put, call, take, fork, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { push } from 'react-router-redux';
import { auth as AuthService } from '../../navigation/routes';
import apiActions from '../../redux/api';
import orderActions from '../../redux/orders';
import authActions from '../../redux/auth';
import userActions from '../../redux/user';
import sessionActions from '../../redux/session';
import userApi from '../../services/api/graphql/users';
import cleanGQLresponse from '../tools/cleanGQLresponse';
import cleanAuth0Profile from './cleanAuth0Profile';

const api = userApi.createAPI();

function createAuthChannel(auth) {
  return eventChannel((emitter) => {
    const loggedInHandler = ({ profile }) => emitter({
      type: 'loggedIn',
      payload: { profile },
    });
    const loginFailureHandler = error => emitter({
      type: 'error',
      payload: { ...error },
    });
    const loggedOutHandler = () => emitter({
      type: 'loggedOut',
    });
    auth.on('logged_in', loggedInHandler);
    auth.on('logged_out', loggedOutHandler);
    auth.on('login_failure', loginFailureHandler);
    return _ => _;
  });
}

function* postLoginActions(payload) {
  const reduxState = yield select(state => state);
  const {
    profile,
    auth0Id,
    loginType,
  } = cleanAuth0Profile(reduxState, payload.profile);

  const response = yield call(() =>
    api.LoginOrRegister({ auth0Id, loginType, profile }),
  );
  const { ok, problem, data } = cleanGQLresponse(response);

  if (ok) {
    yield [
      put(orderActions.emptyGuestCart()),
      put(userActions.saveUser(data.data.LoginOrRegister)),
      put(authActions.loginSuccess()),
      put(sessionActions.resetPreLoginUrl()),
    ];
  } else {
    yield [
      put(authActions.loginFailure('Auth0 logged in Successfully.\nCould not save/register user data to database.')),
      put(apiActions.apiFail(problem)),
    ];
  }
}

function* preLoginActions(socialType) {
  yield [
    put(userActions.saveLoginType(socialType)),
    put(authActions.authorizationInProgress()),
    put(sessionActions.savePreloginPage()),
  ];
}

function* socialLogin(socialType) {
  console.log('%cAuthService[socialType]', 'background:pink;', AuthService[socialType]);
  yield call(preLoginActions, socialType);
  yield call(() => AuthService[socialType]());
}

export function* watchAuthActions() {
  const authChannel = yield call(createAuthChannel, AuthService);
  while (true) {
    const { payload, type } = yield take(authChannel);
    switch (type) {
      case 'loggedIn': yield fork(postLoginActions, payload); break;

      case 'error': yield put(authActions.loginFailure(payload)); break;

      case 'loggedOut': yield [
        put(push('/')),
        put(authActions.loggedOut()),
        put(userActions.removeProfile()),
        put(sessionActions.resetPreLoginUrl()),
      ]; break;

      default: throw Error('Saga Login Error');
    }
  }
}

export default function* authorizationSaga() {
  while (true) {
    const { socialType } = yield take('AUTH_SOCIAL_LOGIN');
    yield call(socialLogin, socialType);
  }
}
