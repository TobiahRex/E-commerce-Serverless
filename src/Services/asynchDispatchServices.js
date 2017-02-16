import saveActivePageActions from '../Redux/ActivePageRedux';
import geoActions from '../Redux/GeoRedux';
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
    dispatch(saveActivePageActions.saveActivePage(title, url));
  },
  saveGeoLocation: (dispatch) => {
    const activeLocation = JSON.parse(localStorage.getItem('active_location'));
    if (activeLocation) {
      const { ip, country, loc } = activeLocation;
      dispatch(geoActions.updateGeo(ip, country, loc));
    }
  },
};
