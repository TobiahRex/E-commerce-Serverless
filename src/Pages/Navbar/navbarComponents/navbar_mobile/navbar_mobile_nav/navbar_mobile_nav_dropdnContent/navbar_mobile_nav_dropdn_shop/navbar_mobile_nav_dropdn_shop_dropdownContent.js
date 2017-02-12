import React from 'react';
import { Link } from 'react-router';

export default function NavbarMobileNavShopDropdnContent() {
  return (
    <div className="navbar-mobile-nav-dropdown-shop-expanded">
      <ul className="navbar-mobile-nav-dropdown-shop-expanded-list">
        <li className="sweep-right-white">
          <Link >
            Fruity Bamm Bamm
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link >
            Keylime Pie
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link >
            Pina Colada
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link >
            French Vanilla Mocha
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link >
            Strawberries {('N\'')} Cream
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link >
            Papple Berry
          </Link>
        </li>
      </ul>
    </div>
  );
}
