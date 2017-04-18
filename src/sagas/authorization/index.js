import { put } from 'redux-saga/effects';
import { auth as AuthService } from '../../navigation/routes';
import authActions from '../../redux/auth';

function* authInProgress() {
  yield put(authActions.authorizationInProgress());
  return yield select('auth');
}

export default function* authSocialLogin({ socialType }) {
  const authState = yield* authInProgress();
  console.warn('authState: ', authState.authorizationInProgress);
  yield put(AuthService[socialType]());
}
