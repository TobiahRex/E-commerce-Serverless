import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import AgeVerification from './Pages/AgeVerification/ageVerification';
import NavbarWeb from './Pages/Navbar/navbarComponents/navbar_web/navbar_web';
import NavbarMobile from './Pages/Navbar/navbarComponents/navbar_mobile/navbar_mobile';
import Footer from './Pages/Footer/footer';
import sessionActions from './Redux/SessionRedux';
import userActions from './Redux/UserRedux';
import { genDynamicTitle } from './Services/Asynch';

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
    activeUser: PropTypes.objectOf(PropTypes.any).isRequired,
    // screenWidth: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      ageVerified: props.ageVerified,
      showNavbarDropdown: false,
    };
  }

  componentWillReceiveProps({ ageVerified }) {
    if (this.state.ageVerified !== ageVerified) {
      this.setState({ ageVerified });
    }
  }
  // ----------------------------- Utils ------------------------------------
  saveActivePage = () => {
    const { title, url } = genDynamicTitle();
    this.props.saveActivePage(title, url);
  }

  preRender = () => ({
    avStyle: this.state.ageVerified ? App.styles.hide : App.styles.show,
  })

  // -------------------------- Child Props ------------------------------------
  toggleNavbarDropdown = () => {
    this.setState({ showNavbarDropdown: !this.state.showNavbarDropdown });
  }

  verifyAge = (event) => {
    const history = createHistory();
    event.preventDefault();
    this.props.verifyAge();
    history.push('/home');
  };

  logoutUser = () => console.info('USER LOGGED OUT!');

  render() {
    const { avStyle } = this.preRender();

    return (
      <div id="yo">
        <AgeVerification
          avStyle={avStyle}
          verifyAge={this.verifyAge}
        />
        <header className="navbar-comp-container">
          <NavbarWeb
            logoutUser={this.logoutUser}
            activeUser={this.props.activeUser}
            dropdownDisplay={this.state.showNavbarDropdown}
            toggleNavbarDropdown={this.toggleNavbarDropdown}
          />
          <NavbarMobile
            logoutUser={this.logoutUser}
            activeUser={this.props.activeUser}
          />
        </header>
        <section id="main-section">
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
  activeUser: user,
});
const mapDispatchToProps = dispatch => ({
  saveActivePage: (title, currentPath) =>
  dispatch(sessionActions.saveActivePage(title, currentPath)),
  verifyAge: () => dispatch(userActions.ageVerified()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
