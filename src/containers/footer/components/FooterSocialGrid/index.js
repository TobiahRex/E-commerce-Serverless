import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  FooterHdr,
} from '../';

const FooterSocialGrid = () => (
  <div className="grid__social-column w-col w-col-3">
    <FooterHdr section="social" title="home.footer.follow.title" />

    <div className="social__icon-container">
      <div className="facebook-icon sweep-right">
        <FontAwesome name="facebook" className="facebook-fa-icon" />
      </div>
      <div className="instagram-icon sweep-right">
        <FontAwesome name="instagram" className="instagram-fa-icon" />
      </div>
    </div>
    <div className="social__icon-container">
      <div className="twitter-icon sweep-right">
        <FontAwesome name="twitter" className="twitter-fa-icon" />
      </div>
      <div className="linkedin-icon sweep-right">
        <FontAwesome name="linkedin" className="linkedin-fa-icon" />
      </div>
    </div>
  </div>
);

FooterSocialGrid.propTypes = {
  section: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FooterSocialGrid;
