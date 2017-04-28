// ----- Sagas ----- //
import applicationStartup from './startup';
import authorizationSaga, { watchAuthActions } from './authorization';
import fetchProductById from './products/';
// ----- api's ----- //

export default function* rootSaga() {
  yield [
    fetchProductById(),
    applicationStartup(),
    authorizationSaga(),
    watchAuthActions(),
    /* TODO: MVP 2
    takeLatest(authTypes.EMAIL_AUTH_IN_PROGRESS, emailAuthInProgress),*/
  ];
}
