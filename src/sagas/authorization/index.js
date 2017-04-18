import { put } from 'redux-saga/effects';
// import request from 'request';
import { auth as AuthService } from '../../navigation/routes';

export default function* authSocialLogin({ socialType }) {
  yield put(AuthService[socialType]());
  // const clientID = process.env.LINE_CHANNEL_ID;
  // const redirectUri = process.env.LINE_REDIRECT_URI;
  // const state = process.env.LINE_STATE;
  // request(`https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=${clientID}&redirect_uri=${redirectUri}&state=${state}`);
}
