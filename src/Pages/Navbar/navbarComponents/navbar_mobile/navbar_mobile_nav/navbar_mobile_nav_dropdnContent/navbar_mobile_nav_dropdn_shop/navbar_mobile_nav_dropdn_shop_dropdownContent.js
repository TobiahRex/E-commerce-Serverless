import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import uuid from 'uuid';

const propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
};

function NavbarMobileNavShopDropdnContent({ toggleDropdown }) {
  return (
    <div className="navbar-mobile-nav-dropdown-shop-expanded">
      <ul className="navbar-mobile-nav-dropdown-shop-expanded-list">
        <li className="sweep-right-white">
          <Link to={`/product/${uuid()}`} onClick={toggleDropdown}>
            Fruity Bamm Bamm
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={`/product/${uuid()}`} onClick={toggleDropdown}>
            Keylime Pie
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={`/product/${uuid()}`} onClick={toggleDropdown}>
            Pina Colada
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={`/product/${uuid()}`} onClick={toggleDropdown}>
            French Vanilla Mocha
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={`/product/${uuid()}`} onClick={toggleDropdown}>
            Strawberries {('N\'')} Cream
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={`/product/${uuid()}`} onClick={toggleDropdown}>
            Papple Berry
          </Link>
        </li>
      </ul>
    </div>
  );
}

NavbarMobileNavShopDropdnContent.propTypes = propTypes;
export default NavbarMobileNavShopDropdnContent;
