import saveLocationAction from '../Redux/LocationRedux';

export default (dispatch) => {
  let path = window.location.pathname;
  path = path.replace(/[\/]/g, '_')
  .split('_');
  let title = '';
  for (let i = 1; i < path.length; i += 1) {
    if (path[i] === 'and') {
      title += '& ';
    } else if (path[i] === 'user') {
      title += 'My Dashboard';
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
  dispatch(saveLocationAction(title));
  return 1;
};
