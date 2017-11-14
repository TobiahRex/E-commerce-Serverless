import React from 'react';
import { Link } from 'react-router';

function NavbarNavsMediaDropdnTopthird() {
  return (
    <div className="media-dropdown-content-topThird">
      <div className="media-dropdown-content-topThird-images">
        <Link
          to={'/contact_us'} className="media-dropdown-content-midThird-links"
        >
          <img
            className="media-dropdown-content-topThird-images-contactUs"
            alt="Contact Us"
          />
        </Link>
      </div>
      <div className="media-dropdown-content-topThird-images">
        <Link
          to={'/reviews'} className="media-dropdown-content-midThird-links"
        >
          <img
            className="media-dropdown-content-topThird-images-juiceReviews"
            alt="Juice Review"
          />
        </Link>
      </div>
      <div className="media-dropdown-content-topThird-images">
        <Link
          to={'/vape_news'} className="media-dropdown-content-midThird-links"
        >
          <img
            className="media-dropdown-content-topThird-images-vapeNews"
            alt="Vape News"
          />
        </Link>
      </div>
      <div className="media-dropdown-content-topThird-images">
        <Link
          to={'/stories'} className="media-dropdown-content-midThird-links"
        >
          <img
            className="media-dropdown-content-topThird-images-userStories"
            alt="User Stories"
          />
        </Link>
      </div>
    </div>
  );
}

export default NavbarNavsMediaDropdnTopthird;
