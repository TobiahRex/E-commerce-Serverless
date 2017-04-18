import { put, select } from 'redux-saga/effects';
import { auth as AuthService } from '../../navigation/routes';
import authActions from '../../redux/auth';

export default function* authSocialLogin({ socialType }) {
  yield put(authActions.authorizationInProgress());

  const authState = yield select(auth);

  if (authState.authorizationInProgress) {
    yield put(AuthService[socialType]());
  }
}
