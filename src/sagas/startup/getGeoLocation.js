import { put, call } from 'redux-saga/effects';
import geoActions from '../../redux/geo';
import localeActions from '../../redux/locale';
import apiActions from '../../redux/api';
import geoApi from '../../services/api/geolocation';

export default function* getGeoLocation() {
  const response = yield call(() => geoApi.getGeoLocation());
  if (response.ok) {
    const { ip, loc, country } = response.data;
    yield [
      put(apiActions.apiSuccess()),
      put(geoActions.updateGeo(ip, loc)),
      put(localeActions.setCountry(country)),
    ];
  } else {
    yield put(apiActions.apiFail(response.data));
  }
}
