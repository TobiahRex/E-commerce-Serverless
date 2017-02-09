import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router';

class NavbarNavsMediaDropdnMidthird extends PureComponent {
  render() {
    return (
      <div className="media-dropdown-content-midThird">
        <Link
          to={'/contact_us'} className="media-dropdown-content-midThird-links"
        >
          <div className="media-dropdown-content-midThird-title">
            <h4>Contact Us</h4>
          </div>
        </Link>
        <Link
          to={'/juice_reviews'}
          className="media-dropdown-content-midThird-links"
        >
          <div className="media-dropdown-content-midThird-title">
            <h4>Juice Reviews</h4>
          </div>
        </Link>
        <Link
          to={'/vape_news'}
          className="media-dropdown-content-midThird-links"
        >
          <div className="media-dropdown-content-midThird-title">
            <h4>Vape News</h4>
          </div>
        </Link>
        <Link
          to={'/user_stories'}
          className="media-dropdown-content-midThird-links"
        >
          <div className="media-dropdown-content-midThird-title">
            <h4>User Stories</h4>
          </div>
        </Link>
      </div>
    );
  }
}

export default NavbarNavsMediaDropdnMidthird;
