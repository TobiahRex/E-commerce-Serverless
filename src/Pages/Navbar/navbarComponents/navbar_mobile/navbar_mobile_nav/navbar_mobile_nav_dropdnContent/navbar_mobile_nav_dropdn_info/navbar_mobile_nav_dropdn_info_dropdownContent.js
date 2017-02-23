import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
};

function NavbarMobileNavInfoDropdnContent({ toggleDropdown }) {
  return (
    <div className="navbar-mobile-nav-dropdown-info-expanded">
      <ul className="navbar-mobile-nav-dropdown-info-expanded-list">
        <li className="sweep-right-white">
          <Link to="/about" onClick={toggleDropdown}>
            About
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/contact_us'} onClick={toggleDropdown}>
            Contact Us
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/faqs'} onClick={toggleDropdown}>
            {('FAQ\'s')}
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/shipping_and_return_policy'} onClick={toggleDropdown}>
            Shipping & Return Policy
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/privacy_policy'} onClick={toggleDropdown}>
            Privacy Policy
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/nicotine_disclaimer'} onClick={toggleDropdown}>
            Nicotine Disclaimer
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/terms_and_conditions'} onClick={toggleDropdown}>
            Terms & Conditions
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/mission_statement'} onClick={toggleDropdown}>
            Mission Statement
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/wholesale'} onClick={toggleDropdown}>
            Wholesale
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/affiliate_program'} onClick={toggleDropdown}>
            Affiliate Program
          </Link>
        </li>
      </ul>
    </div>
  );
}

NavbarMobileNavInfoDropdnContent.propTypes = propTypes;
export default NavbarMobileNavInfoDropdnContent;
