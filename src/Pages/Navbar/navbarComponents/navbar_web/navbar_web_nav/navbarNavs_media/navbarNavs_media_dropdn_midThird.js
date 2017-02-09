import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router';

class NavbarNavsMediaDropdnMidthird extends PureComponent {
  render() {
    return (
      <div className="media-dropdown-content-midThird">
        <Link to={'/conatct_us'}>
          <div className="media-dropdown-content-midThird-title">
            <h4>Contact Us</h4>
          </div>
        </Link>
        <Link to={'/juice_reviews'}>
          <div className="media-dropdown-content-midThird-title">
            <h4>Juice Reviews</h4>
          </div>
        </Link>
        <Link to={'/vape_news'}>
          <div className="media-dropdown-content-midThird-title">
            <h4>Vape News</h4>
          </div>
        </Link>
        <Link to={'/user_stories'}>
          <div className="media-dropdown-content-midThird-title">
            <h4>User Stories</h4>
          </div>
        </Link>
      </div>
    );
  }
}

export default NavbarNavsMediaDropdnMidthird;
