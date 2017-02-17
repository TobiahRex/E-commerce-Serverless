import MobileDetect from 'mobile-detect';
import sessionActions from '../Redux/SessionRedux';
import mobileActions from '../Redux/MobileRedux';
import geoActions from '../Redux/GeoRedux';
import localeActions from '../Redux/LocaleRedux';


export default {
  generateDynamicTitle: (dispatch) => {
    const url = window.location.pathname;
    const path = url.replace(/[\/]/g, '_')
    .split('_');
    let title = '';
    for (let i = 1; i < path.length; i += 1) {
      if (path[i] === 'and') {
        title += '& ';
      } else if (path[i] === 'stories') {
        title += 'User Stories';
        break;
      } else if (path[i] === 'user') {
        title += 'My Account';
        break;
      } else if (path[i] === 'product') {
        title += 'Juice';
        break;
      } else if (path[i] === 'admin') {
        title += 'Admin Dashboard';
        break;
      } else if (path[i] === 'faqs') {
        title += 'FAQ\'s';
        break;
      } else if (path[i] === '') {
        title += 'Home';
        break;
      } else {
        title += `${path[i][0].toUpperCase()}`;
        title += `${path[i].slice(1)} `;
      }
    }
    dispatch(sessionActions.saveActivePage(title, url));
  },
  saveGeoLocation: (dispatch) => {
    const activeLocation = JSON.parse(localStorage.getItem('active_location'));
    if (activeLocation) {
      const { ip, country, loc } = activeLocation;
      dispatch(geoActions.updateGeo(ip, loc));
      dispatch(localeActions.setCountry(country));
    }
  },
  determineMobileDevice: (dispatch) => {
    const screenSize = String(window.screen.width);
    const mobileDevice = new MobileDetect(window.navigator.userAgent);
    const type = mobileDevice.mobile();
    dispatch(mobileActions.setMobileDevice(screenSize, type));
  },
};
