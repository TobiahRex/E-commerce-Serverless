import { put } from 'redux-saga/effects';
import AuthService from '../../services/utils/authService';
import sessionActions from '../../redux/session';

export default function* Auth0SocialLogin({ socialType, previousUrl }) {
  yield [
    put(sessionActions.savePreloginPage(previousUrl)),
    put(AuthService[socialType]()),
  ];
}
