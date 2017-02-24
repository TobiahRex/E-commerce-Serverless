import MobileDetect from 'mobile-detect';
import sessionActions from '../Redux/SessionRedux';
import mobileActions from '../Redux/MobileRedux';
import geoActions from '../Redux/GeoRedux';
import localeActions from '../Redux/LocaleRedux';

export function generateDynamicTitle(dispatch) {
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
}
export function saveGeoLocation(dispatch) {
  const activeLocation = JSON.parse(localStorage.getItem('active_location'));
  if (activeLocation) {
    const { ip, country, loc } = activeLocation;
    dispatch(geoActions.updateGeo(ip, loc));
    dispatch(localeActions.setCountry(country));
  }
}

export function setMobileDevice(dispatch) {
  const mobileDevice = new MobileDetect(window.navigator.userAgent);
  alert(`user Agent: ${window.navigator.userAgent}`);
  const type = mobileDevice.mobile();
  dispatch(mobileActions.setMobileDevice(type));
}

export function setScreenSize(dispatch) {
  const screenSize = String(window.screen.width);
  dispatch(mobileActions.setScreenWidth(screenSize));
}

export function orientationSpy(dispatch) {
  window.addEventListener('orientationchange', () => {
    if (screen.orientation) {
      dispatch(mobileActions.orientationChanged({
        angle: screen.orientation.angle,
        type: screen.orientation.type,
        height: screen.height,
        width: screen.width,
      }));
    } else {
      dispatch(mobileActions.orientationChanged({
        height: screen.height,
        width: screen.width,
        angle: null,
        type: null,
      }));
    }
  });
}

function scrollToTop() {
  window.scrollTo(0, 1);
}

export default function initiateActions(dispatch) {
  generateDynamicTitle(dispatch);
  saveGeoLocation(dispatch);
  setMobileDevice(dispatch);
  setScreenSize(dispatch);
  orientationSpy(dispatch);
  if (screen.orientation) {
    dispatch(mobileActions.orientationChanged({
      angle: screen.orientation.angle,
      type: screen.orientation.type,
      height: screen.height,
      width: screen.width,
    }));
  } else {
    const screenSize = {
      height: screen.height,
      width: screen.width,
      angle: null,
      type: null,
    };
    dispatch(mobileActions.orientationChanged({ screenSize }));
  }
  scrollToTop();
}
