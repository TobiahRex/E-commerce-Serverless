import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import AgeVerification from './Pages/AgeVerification/ageVerification';
import NavbarWeb from './Pages/Navbar/navbarComponents/navbar_web/navbar_web';
import NavbarMobile from './Pages/Navbar/navbarComponents/navbar_mobile/navbar_mobile';
import Footer from './Pages/Footer/footer';

/* Redux Actions */
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
      ageVerified: this.props.ageVerified,
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

  render() {
    const { ageVerified } = this.state;
    const { hide, show } = App.styles;
    const avStyle = ageVerified ? hide : show;
    return (
      <div>
        <AgeVerification
          avStyle={avStyle}
          verifyAge={this.verifyAge}
        />
        <header className="navbar-comp-container">
          <NavbarWeb />
          <NavbarMobile />
        </header>
        {this.props.children}
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ session, user }) => ({
  activePage: session.currentActivePage,
  ageVerified: user.ageVerified,
});
const mapDispatchToProps = dispatch => ({
  saveActivePage: (title, currentPath) =>
  dispatch(sessionActions.saveActivePage(title, currentPath)),
  verifyAge: () => dispatch(userActions.ageVerified()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
