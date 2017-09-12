import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  NavbarMobileLogo,
  NavbarMobileNavs,
  NavbarMobileUserActions,
  NavbarMobileOptionsLanguage,
} from '../';

const { objectOf, any } = PropTypes;

class NavbarMobile extends React.PureComponent {
  static propTypes = {
    activeUser: objectOf(any),
  }
  static defaultProps = {
    activeUser: false,
  }
  render() {
    return (
      <nav className="navbar navbar__mobile">
        <div className="navbar__mobile--container">
          <NavbarMobileLogo />
          <NavbarMobileOptionsLanguage />
          <NavbarMobileUserActions activeUser={this.props.activeUser} />
          <NavbarMobileNavs />
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  activeUser: user.profile,
});
export default connect(mapStateToProps)(NavbarMobile);
