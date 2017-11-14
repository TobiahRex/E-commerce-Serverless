import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AgeVerification from './containers/ageVerification';
import Navbar from './containers/navbar';
import Footer from './containers/footer';
import userActions from './redux/user';

const { any, bool, func, objectOf } = PropTypes;
class App extends Component {
  static propTypes = {
    children: objectOf(any).isRequired,
    ageVerified: bool,
    verifyAge: func.isRequired,
  }
  static defaultProps = {
    ageVerified: false,
    screenWidth: '1080',
  }
  static styles = {
    hide: {
      display: 'none',
    },
    show: {
      display: 'flex',
    },
  }

  constructor(props) {
    super(props);

    this.state = {
      ageVerified: props.ageVerified,
    };
  }

  componentWillReceiveProps({ ageVerified }) {
    if (this.state.ageVerified !== ageVerified) {
      this.setState({ ageVerified });
    }
  }
  // ----------------------------- Utils ------------------------------------
  preRender = () => ({
    avStyle: this.state.ageVerified ? App.styles.hide : App.styles.show,
  })

  // -------------------------- Child Props ------------------------------------

  verifyAge = (event) => {
    event.preventDefault();
    this.props.verifyAge();
  };
  render() {
    const { avStyle } = this.preRender();

    return (
      <div id="app-container">
        <AgeVerification
          avStyle={avStyle}
          verifyAge={this.verifyAge}
        />
        <Navbar />
        <section id="main-section">
          {/* {this.props.children} */}
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ user, session, mobile }) => ({
  activePage: session.currentActivePage,
  ageVerified: user.ageVerified,
  mobileActive: mobile.mobileTypes,
  screenWidth: mobile.screenWidth,
});
const mapDispatchToProps = dispatch => ({
  verifyAge: () => dispatch(userActions.ageVerified()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
