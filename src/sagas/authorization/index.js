import { put, select } from 'redux-saga/effects';
import { auth as AuthService } from '../../navigation/routes';
import authActions from '../../redux/auth';

function* authInProgress() {
  yield put(authActions.authorizationInProgress());
  // return yield select(state => state.auth);
}

export default function* authSocialLogin({ socialType }) {
  yield* authInProgress();
  yield put(AuthService[socialType]());
}
