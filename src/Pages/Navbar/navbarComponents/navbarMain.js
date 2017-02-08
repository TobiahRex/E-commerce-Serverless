import React, { PropTypes } from 'react';

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
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar navbar-header">
              <NavbarLogo />
              <NavbarActionSection />
            </div>
          </div>
        </nav>
        {/* {this.props.children || ''} */}
      </header>
    );
  }
}

export default Navbar;
