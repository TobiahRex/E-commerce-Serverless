import React from 'react';
import { Link } from 'react-router';

export default function MediaMid() {
  const setRenderKey = key => (key += 1);
  const renderKey = setRenderKey(0);

  return (
    <div
      key={renderKey}
      onMouseEnter={() => setRenderKey(renderKey)}
      className="floating-media-container__middle-section"
    >

      <Link
        className="middle-section__contact--img-container w-inline-block"
        to="/contact_us"
      >
        <img
          alt="Contact Us"
          data-ix="nav-s-media-hdr-hover-2"
          src="/images/navbar_web_media_contactUs.png"
          data-w-id="ddb5d08f-5dc4-2cee-505f-20d37d489b8f"
          className="img-container__media-section-img media-section-img--contact-us"
        />
      </Link>

      <Link
        className="middle-section__reviews--img-container w-inline-block"
        to="/juice_reviews"
      >
        <img
          alt="Juice Reviews"
          data-ix="nav-s-media-img-hover"
          src="/images/navbar_web_media_juiceReviews.png"
          data-w-id="46ecfcfe-b463-92ff-3eb6-332646f2ecf5"
          className="img-container__media-section-img media-section-img--juice-reviews"
        />
      </Link>
      <Link
        className="middle-section__news--img-container w-inline-block"
        to="/vape_news"
      >
        <img
          alt="Vape News"
          data-ix="nav-s-media-img-hover"
          src="/images/navbar_web_media_vapeNews.png"
          data-w-id="4a7d0630-c62b-445e-6592-e285c4df08e8"
          className="img-container__media-section-img media-section-img--vape-news"
        />
      </Link>
      <Link
        className="middle-section__stories--img-container w-inline-block"
        to="/user_stories"
      >
        <img
          alt="User Stories"
          src="/images/navbar_web_media_userStories.png"
          data-w-id="5e088016-08ed-f6bf-90c4-7bbc3792af61"
          className="img-container__media-section-img media-section-img--usr-stories"
        />
      </Link>
    </div>
  );
}
