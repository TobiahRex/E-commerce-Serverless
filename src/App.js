import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import AgeVerification from './Pages/AgeVerification/ageVerification';
import NavbarWeb from './Pages/Navbar/navbarComponents/navbar_web/navbar_web';
import NavbarMobile from './Pages/Navbar/navbarComponents/navbar_mobile/navbar_mobile';
import saveActivePageActions from './Redux/ActivePageRedux';
import genDynamicTitle from './Services/dynamicTitle';

class App extends Component {
  static defaultProps = {

  }

  static propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
    saveActivePage: PropTypes.func.isRequired,
    activePage: PropTypes.objectOf(PropTypes.string),
  }

  constructor(props) {
    super(props);

    this.state = {
      currentActivePage: this.props.activePage.current_active_page,
      currentActiveUrl: this.props.activePage.current_active_url,
      previousPage: this.props.activePage.previous_page,
      previousPageUrl: this.props.activePage.previous_page_url,
    };
  }

  saveActivePage = () => {
    const { title, url } = genDynamicTitle();
    this.props.saveActivePage(title, url);
  }

  render() {
    return (
      <div>
        <AgeVerification />
        <header className="navbar-comp-container">
          <NavbarWeb />
          <NavbarMobile />
        </header>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({ active_page, age_verification }) => ({
  activePage: active_page,
  ageVerified: age_verification.age_verified,
});
const mapDispatchToProps = dispatch => ({
  saveActivePage: (title, currentPath) =>
  dispatch(saveActivePageActions.saveActivePage(title, currentPath)),
  ageVerified: () => dispatch(ageVerificationActions.)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
