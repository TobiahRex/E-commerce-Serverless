import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

function MediaMid({ reRenderNavbar }) {
  return (
    <div className="foating-media-container__bottom-section">
      <div className="bottom-section__inner-container">
        <Link
          className="inner-container__media-icon media-icon__fb w-inline-block"
          data-ix="nav-b-media-social-hover"
          to="http://facebook.com/nj2jp"
          onClick={reRenderNavbar}
        >
          <p className="media-icon__fa-icon">
            <FontAwesome name="facebook" />
          </p>
        </Link>
        <Link
          className="inner-container__media-icon media-icon__twitter w-inline-block"
          data-ix="nav-b-media-social-hover"
          to="http://twitter.com/nicjuice2japan"
          onClick={reRenderNavbar}
        >
          <p className="media-icon__fa-icon">
            <FontAwesome name="twitter" />
          </p>
        </Link>
        <Link
          className="inner-container__media-icon media-icon__insta w-inline-block"
          data-ix="nav-b-media-social-hover"
          to="http://instagram.com/nicjuice2japan"
          onClick={reRenderNavbar}
        >
          <p className="media-icon__fa-icon">
            <FontAwesome name="instagram" />
          </p>
        </Link>
      </div>
    </div>
  );
}
MediaMid.propTypes = {
  reRenderNavbar: PropTypes.func.isRequired,
};
export default MediaMid;
