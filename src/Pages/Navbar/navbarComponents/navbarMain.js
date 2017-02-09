import React, { PropTypes } from 'react';

import NavbarWeb from './navbar_web/navbar_web';
import NavbarLogo from './navbar_web/navbarLogo';
import NavbarActionSection from './navbar_web/navbarActionSection';

class Navbar extends React.Component {
  static defaultProps = {

  }

  static propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
  }

  constructor(props){
    super(props);


  }

  render() {
    return (
      <header className="navbar-comp-container">

        {/* {this.props.children || ''} */}
      </header>
    );
  }
}

export default Navbar;
