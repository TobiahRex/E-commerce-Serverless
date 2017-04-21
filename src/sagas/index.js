import { takeLatest } from 'redux-saga/effects';

// ----- Sagas ----- //
import applicationStartup from './startup';
import authorizationSaga, { watchAuthActions } from './authorization';

// ----- Types ----- //

export default function* rootSaga() {
  yield [
    applicationStartup(),
    authorizationSaga(),
    watchAuthActions(),
    /* TODO: MVP 2
    takeLatest(authTypes.EMAIL_AUTH_IN_PROGRESS, emailAuthInProgress),*/
  ];
}
