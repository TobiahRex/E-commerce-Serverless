import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import NavbarWeb from './navbar_web/navbar_web';
import NavbarMobile from './navbar_mobile/navbar_mobile';
import saveActivePageActions from '../../../Redux/ActivePageRedux';
import { genDynamicTitle } from '../../../Services/asynchDispatchServices';

class Navbar extends Component {

  static propTypes = {
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
        <header className="navbar-comp-container">
          <NavbarWeb />
          <NavbarMobile />
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ active_page }) => ({
  activePage: active_page,
});
const mapDispatchToProps = dispatch => ({
  saveActivePage: (title, currentPath) =>
  dispatch(saveActivePageActions.saveActivePage(title, currentPath)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
