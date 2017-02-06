import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { MuiThemeProvider } from 'material-ui/styles';

import NavbarLogo from './navbarLogo';
import NavbarActionSection from './navbarActionSection';

import styles from '../navbarStyles/_navbar_styles.scss';

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
