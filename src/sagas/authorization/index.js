import { put } from 'redux-saga/effects';
import { auth as AuthService } from '../../navigation/routes';
import authActions from '../../redux/auth';
import sessionActions from '../../redux/session';

function* savePreviousPage() {
  yield put(sessionActions.savePreloginPage());
}

function* authInProgress() {
  yield put(authActions.authorizationInProgress());
  // return yield select(state => state.auth);
}

export default function* authSocialLogin({ socialType }) {
  yield* authInProgress();
  yield put(AuthService[socialType]());
}
