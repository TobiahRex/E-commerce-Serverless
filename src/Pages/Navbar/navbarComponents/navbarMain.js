import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { MuiThemeProvider } from 'material-ui/styles';

import Navbar_ActionSection from './navbar_actionSection';

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
    const testStyle = {
      logo: {
        backgroundImage: 'https://s3-ap-southeast-2.amazonaws.com/nj2jp/nj2jp.pn',
        maxWidth: '22em',
      },
    };
    return (
      <header className="navbar-comp-container">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar navbar-header">
              <div className="navbar logoContainer">
                <div style={testStyle.logo} />
                <img
                  src="https://s3-ap-southeast-2.amazonaws.com/nj2jp/nj2jp.png"
                  alt=""
                  className="navbar navbar-logo"
                />
              </div>
              <Navbar_ActionSection />

            </div>
          </div>
        </nav>
        {/* {this.props.children || ''} */}
      </header>
    );
  }
}

export default Navbar;
