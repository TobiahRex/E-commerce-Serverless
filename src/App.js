import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import AgeVerification from './Pages/AgeVerification/ageVerification';
import NavbarWeb from './Pages/Navbar/navbarComponents/navbar_web/navbar_web';
import NavbarMobile from './Pages/Navbar/navbarComponents/navbar_mobile/navbar_mobile';
/* Redux Actions */
import saveActivePageActions from './Redux/ActivePageRedux';
import ageVerificationActions from './Redux/AgeVerificationRedux';
import genDynamicTitle from './Services/dynamicTitle';

class App extends Component {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  static propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
    saveActivePage: PropTypes.func.isRequired,
    ageVerified: PropTypes.func.isRequired,
    activePage: PropTypes.objectOf(PropTypes.string),
  }

  constructor(props) {
    super(props);

    this.state = {
      ageVerified: this.props.ageVerified,
      currentActivePage: this.props.activePage.current_active_page,
      currentActiveUrl: this.props.activePage.current_active_url,
      previousPage: this.props.activePage.previous_page,
      previousPageUrl: this.props.activePage.previous_page_url,
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

  ageVerified = () => this.props.ageVerified();

  render() {
    return (
      <div>
        <AgeVerification ageVerified={this.ageVerified} />
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
  ageVerified: () => dispatch(ageVerificationActions.ageVerified()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
