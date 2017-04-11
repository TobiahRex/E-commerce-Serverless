import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

class NavbarMobileNavTitle extends PureComponent {
  static propTypes = {
    activePage: PropTypes.string,
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
