import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import NavbarWeb from './navbar_web/navbar_web';
import NavbarMobile from './navbar_mobile/navbar_mobile';
import sessionActions from '../../../Redux/SessionRedux';
import { genDynamicTitle } from '../../../Services/Asynch';

class Navbar extends Component {
  static defaultProps = {
    screenWidth: 0,

  }
  static propTypes = {
    saveActivePage: PropTypes.func.isRequired,
    activePage: PropTypes.objectOf(PropTypes.string).isRequired,
    screenWidth: PropTypes.number.isRequired,
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

  renderNavbar = () => {
    if (this.props.screenWidth <= 930) return <NavbarMobile />;
    return <NavbarWeb />;
  }

  render() {
    return (
      <div>
        <header className="navbar-comp-container">
          {this.renderNavbar()}
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ session, mobile }) => ({
  activePage: session.currentActivePage,
  screenWidth: Number(mobile.screenWidth),
});
const mapDispatchToProps = dispatch => ({
  saveActivePage: (title, currentPath) =>
  dispatch(sessionActions.saveActivePage(title, currentPath)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
