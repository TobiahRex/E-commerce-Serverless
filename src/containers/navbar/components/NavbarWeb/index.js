import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';
import {
  WebflowJs,
  WebflowAnimations,
  WebflowAnimations2,
} from './assets/utils';
import {
  NavbarLogoSxn,
  NavbarLanguage,
  NavbarAuthSxn,
  NavbarCart,
  NavbarNavs,
  NavbarProducts,
  NavbarMedia,
  NavbarInfo,
} from './components';

class NavbarWeb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      activeLanguage: '',
    };
  }

  handleLangChange = (e) => {
    const language = e.target.dataset.language || e.target.dataset.parentNode.language;

    this.setState(() => ({
      activeLanguage: language,
    }),
    () => {
      this.props.saveLanguage(language);
      this.props.push(location);
    });
  }

  render() {
    const { activeLanguage } = this.props;

    return (
      <nav className="navbar-big">
        <div className="navbar-big__nav-section">
          <div className="nav-section__navbar-content">
            <NavbarLogoSxn />
            <div className="navbar-content__action-section">
              <div className="action-section__navbar-action-top">
                <NavbarLanguage
                  handleLangChange={this.handleLangChange}
                  activeLanguage={activeLanguage}
                />
                <div className="navbar-action-top__right-side">
                  <NavbarAuthSxn />
                  <NavbarCart />
                </div>
              </div>
              <NavbarNavs />
            </div>
          </div>
        </div>
        <NavbarProducts />
        <NavbarMedia />
        <NavbarInfo />
      </nav>
    );
  }
}
const { func, string } = PropTypes;
NavbarWeb.propTypes = {
  location: string.isRequired,
  activeLanguage: string.isRequired,
  saveLanguage: func.isRequired,
  push: func.isRequired,
};
const NavbarWebWithLifecycle = lifecycle({
  componentDidMount: () => {
    WebflowJs();
    WebflowAnimations();
    WebflowAnimations2();
  },
  componentDidUpdate: () => {
    WebflowAnimations();
    WebflowAnimations2();
  },
})(NavbarWeb);

export default NavbarWebWithLifecycle;
