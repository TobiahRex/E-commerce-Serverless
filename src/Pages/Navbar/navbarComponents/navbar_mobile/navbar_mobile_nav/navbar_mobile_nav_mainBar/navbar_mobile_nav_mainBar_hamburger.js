import React, { PropTypes, PureComponent } from 'react';

class NavbarMobileNavHamburger extends PureComponent {
  static propTypes = {
    ddOpen: PropTypes.bool,
    toggleHamburger: PropTypes.func,
  };

  toggleHamburger = e => this.props.toggleHamburger(e);

  render() {
    const hamClass = this.props.ddOpen ? 'active' : '';
    return (
      <div className="navbar-mobile-nav-hamburger">
        <div className="navbar-mobile-nav-hamburger-icon">
          <a
            href="/"
            onClick={this.toggleHamburger}
            className={`navbar-mobile-nav-hamburger-icon-button ${hamClass}`}
          >
            <span />
          </a>
        </div>
      </div>
    );
  }
}

export default NavbarMobileNavHamburger;

/* NOTE
- I'm not sure this prop is necessary.  First see if you can build the hamburger transition only with SASS.

*/
