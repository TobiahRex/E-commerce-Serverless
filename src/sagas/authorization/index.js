import { put } from 'redux-saga/effects';
// import request from 'request';
import { auth as AuthService } from '../../navigation/routes';

export default function* authSocialLogin({ socialType }) {
  yield put(AuthService[socialType]());
}
