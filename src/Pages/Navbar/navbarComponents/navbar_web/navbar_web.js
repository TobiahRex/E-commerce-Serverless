import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarLogo from './navbarLogo';
import NavbarActionSection from './navbarActionSection';

class NavbarWeb extends PureComponent {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-web navbar-default">
          <div className="container">
            <div className="navbar navbar-header">
              <NavbarLogo />
              <NavbarActionSection />
            </div>
          </div>
        </nav>
      </Router>
    );
  }
}

export default NavbarWeb;
