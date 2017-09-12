import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  NavbarLogo,
  NavbarNavs,
  NavbarOptions,
  NavbarUserActions,
} from './components';

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
          <NavbarLogo />
          <NavbarOptions />
          <NavbarUserActions activeUser={this.props.activeUser} />
          <NavbarNavs />
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  activeUser: user.profile,
});
export default connect(mapStateToProps)(NavbarMobile);
