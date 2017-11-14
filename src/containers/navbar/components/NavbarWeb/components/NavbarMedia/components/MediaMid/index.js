import React from 'react';
import { Link } from 'react-router';

export default function MediaMid() {
  return (
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
  );
}
