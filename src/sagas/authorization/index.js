import { put, call, take, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { auth as AuthService } from '../../navigation/routes';
import authActions from '../../redux/auth';
import userActions from '../../redux/user';
import sessionActions from '../../redux/session';

function createAuthConnection(auth) {
  return eventChannel((emitter) => {
    const loggedInHandler = profile => emitter({
      type: 'loggedIn',
      payload: { ...profile },
    });
    const loginFailureHandler = error => emitter({
      type: 'error',
      payload: { ...error },
    });
    const loggedOutHandler = () => emitter({
      type: 'logout',
    });
    auth.on('logged_in', loggedInHandler);
    auth.on('logged_out', loggedOutHandler);
    auth.on('login_failure', loginFailureHandler);
    return _ => _;
  });
}

function* postLoginActions(profile) {
  yield [
    put(authActions.loginSuccess()),
    put(sessionActions.resetPreLoginUrl()),
    put(userActions.saveProfile(profile)),
  ];
}

function* preLoginActions() {
  yield [
    put(sessionActions.savePreLoginPage()),
    put(authActions.authorizationInProgress()),
  ];
}

function* socialLogin(socialType) {
  yield call(preLoginActions);
  yield put(AuthService[socialType]());
}

function* watchLoggedInActions() {
  const authChannel = yield call(createAuthConnection);
  while (true) {
    const { payload, type } = yield take(authChannel);

    switch (type) {
      case 'loggedIn': yield fork(postLoginActions, payload); break;
      case 'error': yield put(authActions.loginFailure(payload)); break;
      // case 'loggedOut': yield put()
      default: throw Error('Saga Login Error');
    }
    if (type === 'profile') {
      yield fork(postLoginActions, payload);
    } else if (type === 'error') {
      yield put(authActions.loginFailure(payload));
    }
  }
}

export default function* watchLoginActions() {
  watchLoggedInActions();
  const { payload } = yield take('AUTH_SOCIAL_LOGIN');
  yield call(socialLogin, payload);
}
