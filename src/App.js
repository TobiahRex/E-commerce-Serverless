import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import AgeVerification from './Pages/AgeVerification/ageVerification';
import NavbarWeb from './Pages/Navbar/navbarComponents/navbar_web/navbar_web';
import NavbarMobile from './Pages/Navbar/navbarComponents/navbar_mobile/navbar_mobile';
import Footer from './Pages/Footer/footer';
import sessionActions from './Redux/SessionRedux';
import userActions from './Redux/UserRedux';
import { genDynamicTitle, detectMobileDevice } from './Services/Asynch';

/* NOTE:
1. Remove UUID hard code.

*/
class App extends Component {
  static styles = {
    hide: {
      display: 'none',
    },
    show: {
      display: 'flex',
    },
  }
  static defaultProps = {
    ageVerified: false,
    screenWidth: '1080',
  }
  static propTypes = {
    children: PropTypes.objectOf(PropTypes.any).isRequired,
    ageVerified: PropTypes.bool,
    verifyAge: PropTypes.func.isRequired,
    saveActivePage: PropTypes.func.isRequired,
    screenWidth: PropTypes.string.isRequired,
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
    const history = createHistory();
    event.preventDefault();
    this.props.verifyAge();
    history.push('/home');
  };

  chooseNavbar = () => {
    if (this.props.screenWidth <= 930) return <NavbarMobile />;
    return <NavbarWeb />;
  }

  // catchMobileType = () => {
  //   const mobileDevice = new MobileDetect(window.navigator.userAgent);
  //   return mobileDevice.mobile();
  // }

  preRender = () => {
    let sectionStyle;
    if (!detectMobileDevice()) {
      sectionStyle = {
        paddingTop: 120,
        minHeight: 510,
      };
    }
    return ({
      Navbar: this.chooseNavbar(),
      sectionStyle,
      avStyle: this.state.ageVerified ? App.styles.hide : App.styles.show,
    });
  }

  render() {
    const { Navbar, avStyle, sectionStyle } = this.preRender();

    return (
      <div id="yo">
        <AgeVerification
          avStyle={avStyle}
          verifyAge={this.verifyAge}
        />
        <header className="navbar-comp-container">
          <Navbar />
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
  screenWidth: mobile.screenWidth,
});
const mapDispatchToProps = dispatch => ({
  saveActivePage: (title, currentPath) =>
  dispatch(sessionActions.saveActivePage(title, currentPath)),
  verifyAge: () => dispatch(userActions.ageVerified()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
