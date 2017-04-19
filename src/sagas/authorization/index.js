import { put, take, call } from 'redux-saga/effects';
import { auth as AuthService } from '../../navigation/routes';
import authActions from '../../redux/auth';
import sessionActions from '../../redux/session';

// function* savePreviousPage() {
//   yield put(sessionActions.savePreloginPage());
// }
//
// function* authInProgress() {
//   yield put(authActions.authorizationInProgress());
// }
//
// export default function* authSocialLogin({ socialType }) {
//   yield* authInProgress();
//   yield* savePreviousPage();
//   yield put(AuthService[socialType]());
// }

// or

function* preLoginActions() {
  yield [
    put(sessionActions.savePreLoginPage()),
    put(authActions.authorizationInProgress()),
  ];
}

export default function* socialLogin(socialType) {
  while (yield take('SOCIAL_LOGIN')) {
    yield call(preLoginActions);
    yield put(AuthService[socialType]());
  }
}
