import React, { PropTypes } from 'react';

import NavbarWeb from './navbar_web/navbar_web';
import NavbarMobile from './navbar_mobile/navbar_mobile';

class Navbar extends React.Component {
  static defaultProps = {

  }

  static propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
  }

  constructor(props) {
    super(props);

    this.state = {
      something: '',
    };
  }

  render() {
    return (
      <header className="navbar-comp-container">
        <NavbarWeb />
        <NavbarMobile />
      </header>
    );
  }
}

export default Navbar;
