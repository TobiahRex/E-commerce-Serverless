import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

export default function NavbarMobileNavDropdnContent() {
  return (
    <ul className="navbar-mobile-nav-dropdown-content">
      <li className="navbar-mobile-nav-dropdown-shop">
        <div className="navbar-mobile-nav-dropdown-shop-dropdown">
          <div className="navbar-mobile-nav-dropdown-shop-hover-container sweep-right-white">
            <h3 className="navbar-mobile-nav-dropdown-shop-title">Shop</h3>
            <div className="navbar-mobile-nav-dropdown-shop-expand-container">
              <div className="navbar-mobile-nav-dropdown-shop-expand-icon">
                <FontAwesome
                  className="navbar-mobile-nav-dropdown-shop-expand-icon-plus-fa"
                  name="plus"
                />
                <FontAwesome
                  className="navbar-mobile-nav-dropdown-shop-expand-icon-minus-fa"
                  name="minus"
                />
              </div>
            </div>
          </div>
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
        </div>
      </li>
      <li className="navbar-mobile-nav-dropdown-media">
        <div className="navbar-mobile-nav-dropdown-media-dropdown">
          <div className="navbar-mobile-nav-dropdown-media-hover-container sweep-right-white">
            <h3 className="navbar-mobile-nav-dropdown-media-title">Media</h3>
            <div className="navbar-mobile-nav-dropdown-media-expand-container">
              <div className="navbar-mobile-nav-dropdown-media-expand-icon">
                <FontAwesome
                  className="navbar-mobile-nav-dropdown-media-expand-icon-plus-fa"
                  name="plus"
                />
                <FontAwesome
                  className="navbar-mobile-nav-dropdown-media-expand-icon-minus-fa"
                  name="minus"
                />
              </div>
            </div>
          </div>
          <div className="navbar-mobile-nav-dropdown-media-expanded">
            <ul className="navbar-mobile-nav-dropdown-media-expanded-list">
              <li className="sweep-right-white">
                <Link >
                  Contact Us
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link >
                  Vape News
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link >
                  Juice Reviews
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link >
                  User Stories
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link >
                  Social Media
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li className="navbar-mobile-nav-dropdown-info">
        <div className="navbar-mobile-nav-dropdown-info-dropdown">
          <div className="navbar-mobile-nav-dropdown-info-hover-container sweep-right-white">
            <h3 className="navbar-mobile-nav-dropdown-info-title">Info</h3>
            <div className="navbar-mobile-nav-dropdown-info-expand-container">
              <div className="navbar-mobile-nav-dropdown-info-expand-icon">
                <FontAwesome
                  className="navbar-mobile-nav-dropdown-info-expand-icon-plus-fa"
                  name="plus"
                />
                <FontAwesome
                  className="navbar-mobile-nav-dropdown-info-expand-icon-minus-fa"
                  name="minus"
                />
              </div>
            </div>
          </div>
          <div className="navbar-mobile-nav-dropdown-info-expanded">
            <ul className="navbar-mobile-nav-dropdown-info-expanded-list">
              <li className="sweep-right-white">
                <Link to="/product_fbb">
                  About
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link>
                  Contact Us
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link>
                  {('FAQ\'s')}
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link>
                  Return Policy
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link>
                  Privacy Policy
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link>
                  Nicotine Disclaimer
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link>
                  Terms & Conditions
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link>
                  Mission Statement
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link>
                  Wholesale
                </Link>
              </li>
              <li className="sweep-right-white">
                <Link>
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
}
