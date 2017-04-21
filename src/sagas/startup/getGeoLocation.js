import { put, call } from 'redux-saga/effects';
import geoActions from '../../redux/geo';
import localeActions from '../../redux/locale';
import 
import geoApi from '../../services/api/geolocation';

export default function* getGeoLocation() {
  const response = yield call(() => geoApi.getGeoLocation.get());
  if (reponse.ok) {
    console.warn('geo response: ', response);
    const { ip, country, loc } = response.body;
    yield [
      put(apiActions.apiSuccess()),
      put(geoActions.updateGeo(ip, loc)),
      put(localeActions.setCountry(country))
    ];
  } else {
  yield [put(apiActions.apiFail(response.data))];
}
}
