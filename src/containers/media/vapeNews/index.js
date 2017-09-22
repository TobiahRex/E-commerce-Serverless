import React from 'react';
import moment from 'moment';
import {
  intlShape,
  injectIntl,
} from 'react-intl';
import {
  WebflowJs,
  WebflowAnimations,
} from './assets/utils/index';
import {
  HdrPage,
  BreadCrumb,
  UserCard,
} from './components';
import './assets/styles';

class VapeNews extends React.Component {
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'vapenews.breadCrumb.paths1': bcPaths1,
          'vapenews.breadCrumb.lastCrumb': lastCrumb,
        },
      },
    } = props;

    this.intl = {
      bcPaths1,
      lastCrumb,
    };
  }

  componentDidUpdate() {
    WebflowJs();
    WebflowAnimations();
  }

  render() {
    return (

    );
  }
}
VapeNews.propTypes = {
  intl: intlShape.isRequired,
};
const VapeNewsWithIntl = injectIntl(VapeNews);
export default VapeNewsWithIntl;
