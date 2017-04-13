import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import AgeVerification from './containers/ageVerification/ageVerification';
import NavbarWeb from './containers/navbar/navbarComponents/navbar_web/navbar_web';
import NavbarMobile from './containers/navbar/navbarComponents/navbar_mobile/navbar_mobile';
import Footer from './containers/footer/footer';
import sessionActions from './redux/session';
import userActions from './redux/user';
import { genDynamicTitle } from './services/utils';

/* NOTE:
1. Remove UUID hard code.

*/
class App extends Component {
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
    push: PropTypes.func.isRequired,
    // screenWidth: PropTypes.string.isRequired,
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
  saveActivePage = () => {
    const { title, url } = genDynamicTitle();
    this.props.saveActivePage(title, url);
  }

  preRender = () => ({
    avStyle: this.state.ageVerified ? App.styles.hide : App.styles.show,
  })

  // -------------------------- Child Props ------------------------------------

  verifyAge = (event) => {
    event.preventDefault();
    this.props.verifyAge();
    this.props.push('/');
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
          <NavbarWeb />
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
const mapDispatchToProps = (dispatch) => {
  bindActionCreators({ ...routerActions }, dispatch);
  return ({
    saveActivePage: (title, currentPath) =>
    dispatch(sessionActions.saveActivePage(title, currentPath)),
    verifyAge: () => dispatch(userActions.ageVerified()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
