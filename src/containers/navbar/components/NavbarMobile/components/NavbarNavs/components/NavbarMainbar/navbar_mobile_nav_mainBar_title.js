import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const { string } = PropTypes;
class NavbarMobileNavTitle extends PureComponent {
  static propTypes = {
    activePage: string.isRequired,
  };

  render() {
    return (
      <div className="navbar-mobile-nav-title">
        <h5>
          {this.props.activePage}
        </h5>
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  activePage: session.currentActivePage,
});

export default connect(mapStateToProps, null)(NavbarMobileNavTitle);
