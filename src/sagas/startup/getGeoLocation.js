import { put, call } from 'redux-saga/effects';
import geoActions from '../../redux/geo';
import localeActions from '../../redux/locale';
import geoApi from '../../services/api/geolocation';

export default function* getGeoLocation() {
  const response = yield call(() => geoApi.getGeoLocation.get());
  
  const activeLocation = JSON.parse(localStorage.getItem('active_location'));
  if (activeLocation) {
    const { ip, country, loc } = activeLocation;
    yield [
      put(geoActions.updateGeo(ip, loc)),
      put(localeActions.setCountry(country))
    ];
  }
}
