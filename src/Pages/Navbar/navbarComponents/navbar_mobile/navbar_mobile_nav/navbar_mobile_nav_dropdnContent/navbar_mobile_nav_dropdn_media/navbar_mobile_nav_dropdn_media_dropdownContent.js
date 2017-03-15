import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
};

function NavbarMobileNavMediaDropdnContent({ toggleDropdown }) {
  return (
    <div className="navbar-mobile-nav-dropdown-media-expanded">
      <ul className="navbar-mobile-nav-dropdown-media-expanded-list">
        <li className="sweep-right-white">
          <Link to={'/contact_us'} onClick={toggleDropdown}>
            Contact Us
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/vape_news'} onClick={toggleDropdown}>
            Vape News
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/reviews'} onClick={toggleDropdown}>
            Juice Reviews
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/stories'} onClick={toggleDropdown}>
            User Stories
          </Link>
        </li>
        <li className="sweep-right-white">
          <Link to={'/social_media'} onClick={toggleDropdown}>
            Social Media
          </Link>
        </li>
      </ul>
    </div>
  );
}

NavbarMobileNavMediaDropdnContent.propTypes = propTypes;
export default NavbarMobileNavMediaDropdnContent;
