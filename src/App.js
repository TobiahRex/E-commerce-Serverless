import React, { PropTypes, Component } from 'react';
import MobileDetect from 'mobile-detect';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import AgeVerification from './Pages/AgeVerification/ageVerification';
import NavbarWeb from './Pages/Navbar/navbarComponents/navbar_web/navbar_web';
import NavbarMobile from './Pages/Navbar/navbarComponents/navbar_mobile/navbar_mobile';
import Footer from './Pages/Footer/footer';
import sessionActions from './Redux/SessionRedux';
import userActions from './Redux/UserRedux';

import { genDynamicTitle } from './Services/asynchDispatchServices';

class App extends Component {
  static styles = {
    hide: {
      display: 'none',
    },
    show: {
      display: 'flex',
    },
  }

  static propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
    ageVerified: PropTypes.bool,
    verifyAge: PropTypes.func.isRequired,
    saveActivePage: PropTypes.func.isRequired,
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

  saveActivePage = () => {
    const { title, url } = genDynamicTitle();
    this.props.saveActivePage(title, url);
  }

  verifyAge = (event) => {
    event.preventDefault();
    this.props.verifyAge();
    browserHistory.push('/home');
  };

  catchMobileType = () => {
    const mobileDevice = new MobileDetect(window.navigator.userAgent);
    return mobileDevice.mobile();
  }

  render() {
    const { ageVerified } = this.state;
    const { hide, show } = App.styles;
    const avStyle = ageVerified ? hide : show;
    let sectionStyle;
    if (!this.catchMobileType()) {
      sectionStyle = {
        paddingTop: 100,
        minHeight: 510,
      };
    }
    return (
      <div id="yo">
        <AgeVerification
          avStyle={avStyle}
          verifyAge={this.verifyAge}
        />
        <header className="navbar-comp-container">
          <NavbarWeb />
          <NavbarMobile />
        </header>
        <section id="main-section" style={{ ...sectionStyle }}>
          {this.props.children}
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
});
const mapDispatchToProps = dispatch => ({
  saveActivePage: (title, currentPath) =>
  dispatch(sessionActions.saveActivePage(title, currentPath)),
  verifyAge: () => dispatch(userActions.ageVerified()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
