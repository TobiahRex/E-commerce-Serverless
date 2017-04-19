import { put, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { auth as AuthService } from '../../navigation/routes';
import authActions from '../../redux/auth';
import sessionActions from '../../redux/session';

function createAuthConnection(auth) {
  return eventChannel((emit) => {
    const loggedInHandler = profile => emit(profile);
    auth.on('logged_in', loggedInHandler);
  });
}

function* preLoginActions() {
  yield [
    put(sessionActions.savePreLoginPage()),
    put(authActions.authorizationInProgress()),
  ];
}

export default function* socialLogin(socialType) {
  yield call(preLoginActions);
  yield put(AuthService[socialType]());
}
