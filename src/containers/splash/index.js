import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  intlShape,
  injectIntl,
} from 'react-intl';
import './assets/styles';
import {
  WebflowJs,
  WebflowAnimations,
  contentData,
} from './assets/utils/index';
// import {} from './components';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'user-stories.breadCrumb.paths1': bcPaths1,
          'user-stories.breadCrumb.lastCrumb': lastCrumb,
        },
      },
    } = props;

    this.intl = {
      bcPaths1,
      lastCrumb,
    };
  }

  calculateHeight = (header) => {
    const { mobile } = this.props;
    const height = window.innerHeight;

    if (!mobile) {
      if (window.innerWidth > 930) return (height - 120);
      return (height - 267);
    }
    if (header) {
      return (height - 267);
    }
    return (window.innerHeight - 60);
  }

  componentDidUpdate() {
    WebflowJs();
    WebflowAnimations();
  }

  render() {
    return (
      <div className="homepage">

      </div>
    );
  }
}
Splash.propTypes = {
  mobile: PropTypes.bool,
};
Splash.defaultProps = {
  mobile: false,
};
const mapStateToProps = ({ mobile }) => ({
  mobile: !!mobile.mobileType,
});
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
