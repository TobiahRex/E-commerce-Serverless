import { put, call } from 'redux-saga/effects';
import geoActions from '../../redux/geo';
import localeActions from '../../redux/locale';
import toasterActions from '../../redux/toaster';
import apiActions from '../../redux/api';
import geoApi from '../../services/api/geolocation';

export default function* getGeoLocation() {
  yield put(apiActions.fetching());

  const { ok, problem, data } = yield call(() => geoApi.getGeoLocation());

  if (ok) {
    const { ip, loc, country } = data;
    yield [
      put(geoActions.updateGeo(ip, loc)),
      put(localeActions.setCountry(country)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield [
      put(toasterActions.toastError(true, problem)),
      put(apiActions.apiFail()),
    ];
  }
}
