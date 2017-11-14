import React from 'react';
import { Link } from 'react-router';
import { NavbarNavHdr } from './components';

function NavbarNavs() {
  return (
    <div className="navbar-big__media-dropdown">
      <div className="media-dropdown__floating-media-container" data-ix="nav-b-media-hover">
        <div className="floating-media-container__top-section">
          <Link className="top-section__media-hdr w-inline-block" to="#">
            <h3 className="media-hdr__section-text section-text--contact-us">
              Contact Us
            </h3>
          </Link>
          <Link className="top-section__media-hdr w-inline-block" to="#">
            <h3 className="media-hdr__section-text section-text--juice-reviews">
              Juice Reviews
            </h3>
          </Link>
          <div className="top-section__media-hdr" data-ix="nav-s-media-review-hdr-hover-2">
            <Link className="top-section__media-hdr w-inline-block" to="#">
              <h3 className="media-hdr__section-text section-text--vape-news">
                Vape News
              </h3>
            </Link>
          </div>
          <Link className="top-section__media-hdr w-inline-block" to="#">
            <h3 className="media-hdr__section-text section-text--usr-stories">
              User Stories
            </h3>
          </Link>
        </div>
        <div className="floating-media-container__middle-section">
          <Link className="middle-section__contact--img-container w-inline-block" to="/contact_us">
            <img alt="" className="img-container__media-section-img media-section-img--contact-us" data-ix="nav-s-media-hdr-hover-2" src="/images/navbar_web_media_contactUs.png" />
          </Link>
          <Link className="middle-section__reviews--img-container w-inline-block" to="/juice_reviews">
            <img alt="Juice Reviews" className="img-container__media-section-img media-section-img--juice-reviews" data-ix="nav-s-media-img-hover" src="/images/navbar_web_media_juiceReviews.png" />
          </Link>
          <Link className="middle-section__news--img-container w-inline-block" to="/vape_news">
            <img alt="Vape News" className="img-container__media-section-img media-section-img--vape-news" data-ix="nav-s-media-img-hover" src="/images/navbar_web_media_vapeNews.png" />
          </Link>
          <Link className="middle-section__stories--img-container w-inline-block" to="/user_stories">
            <img alt="User Stories" className="img-container__media-section-img media-section-img--usr-stories" src="/images/navbar_web_media_userStories.png" />
          </Link>
        </div>
        <div className="foating-media-container__bottom-section">
          <div className="bottom-section__inner-container">
            <Link className="inner-container__media-icon media-icon__fb w-inline-block" data-ix="nav-b-media-social-hover" to="http://facebook.com/nj2jp">
              <p className="media-icon__fa-icon">
                
              </p>
            </Link>
            <Link className="inner-container__media-icon media-icon__twitter w-inline-block" data-ix="nav-b-media-social-hover" to="http://twitter.com/nicjuice2japan">
              <p className="media-icon__fa-icon">
                
              </p>
            </Link>
            <Link className="inner-container__media-icon media-icon__insta w-inline-block" data-ix="nav-b-media-social-hover" to="http://instagram.com/nicjuice2japan">
              <p className="media-icon__fa-icon">
                
              </p>
            </Link>
          </div>
        </div>
        <div className="floating-media-container__nav-b-menu-box" />
      </div>
    </div>
  );
}
export default NavbarNavs;
