// ----- Sagas ----- //
import applicationStartup from './startup';
import authorizationSaga, { watchAuthActions } from './authorization';
import { fetchPopularProducts } from './products/';
import { fetchUserProfile } from './users/';
// ----- api's ----- //
export default function* rootSaga() {
  yield [
    fetchUserProfile(),
    watchAuthActions(),
    authorizationSaga(),
    applicationStartup(),
    fetchPopularProducts(),
    /* TODO: MVP 2
    takeLatest(authTypes.EMAIL_AUTH_IN_PROGRESS, emailAuthInProgress),*/
  ];
}
