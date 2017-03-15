import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
};

function NavbarMobileNavShopDropdnContent({ toggleDropdown }) {
  return (
    <div className="navbar-mobile-nav-dropdown-shop-expanded">
      <ul className="navbar-mobile-nav-dropdown-shop-expanded-list">
        <li className="sweep-right-white">
          <Link to="juice/fruity_bamm_bamm" onClick={toggleDropdown}>
            Fruity Bamm Bamm
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to="juice/keylime_pie" onClick={toggleDropdown}>
            Keylime Pie
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to="juice/pina_colada" onClick={toggleDropdown}>
            Pina Colada
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to="juice/french_vanilla_mocha" onClick={toggleDropdown}>
            French Vanilla Mocha
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to="juice/strawberries_n_cream" onClick={toggleDropdown}>
            Strawberries {('N\'')} Cream
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to="juice/papple_berry" onClick={toggleDropdown}>
            Papple Berry
          </Link>
        </li>
      </ul>
    </div>
  );
}

NavbarMobileNavShopDropdnContent.propTypes = propTypes;
export default NavbarMobileNavShopDropdnContent;
