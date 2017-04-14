import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';

export default function bindRouterActions(dispatch) {
  return bindActionCreators({ ...routerActions }, dispatch);
}
