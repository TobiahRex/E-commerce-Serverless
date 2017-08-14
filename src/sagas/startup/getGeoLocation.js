import { put, call } from 'redux-saga/effects';
import geoActions from '../../redux/geo';
import localeActions from '../../redux/locale';
import toasterActions from '../../redux/toaster';
import apiActions from '../../redux/api';
import geoApi from '../../services/api/geolocation';

export default function* getGeoLocation() {
  yield put(apiActions.apiFetching());

  const { ok, problem, data } = yield call(() => geoApi.getGeoLocation());

  if (ok) {
    const { ip, loc, country } = data;
    yield [
      put(apiActions.apiSuccess()),
      put(geoActions.updateGeo(ip, loc)),
      put(localeActions.setCountry(country)),
    ];
  } else {
    yield [
      put(toasterActions.toastError({ error: true, message: problem })),
      put(apiActions.apiFail()),
    ];
  }
}
