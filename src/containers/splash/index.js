import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  // WebflowJs,
  // WebflowAnimations,
} from './assets/utils/index';
import {
  Header,
  Reviews,
  FastestDelivery,
  How,
  Promotion,
  Steps,
  NewsReviews,
} from './components';
import './assets/styles/styles.css';

class Splash extends React.Component {
  calculateHeight = (header) => {
    const { mobile } = this.props;
    const height = window.innerHeight;

    if (!mobile) {
      if (window.innerWidth > 930) return height - 120;
      return height - 267;
    }
    if (header) {
      return height - 267;
    }
    return window.innerHeight - 60;
  };

  componentDidMount() {
    // WebflowJs();
    // WebflowAnimations();
  }

  componentDidUpdate() {
    // WebflowAnimations();
  }

  render() {
    return (
      <div className="homepage" >
        <div className="splash-container">
          <Header
            height={this.calculateHeight(true)}
          />
          <Reviews
            height={this.calculateHeight(true)}
          />
          <FastestDelivery />
          <How />
          <Steps />
          <NewsReviews />
          <Promotion />
        </div>
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
const SplashWithState = connect(
  ({ mobile }) => ({
    mobile: !!mobile.mobileType,
  }),
  dispatch => ({
    push: location => dispatch(push(location)),
  }),
)(Splash);
export default SplashWithState;
