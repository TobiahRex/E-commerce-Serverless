import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { WebflowJs } from './assets/utils';

const MemberSocialTwitter = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="staff__social-media">
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="social-media--link staff__social-media"
        href={props.link}
      >
        <FontAwesome name="twitter" />
      </a>
    </div>
  );
};

MemberSocialTwitter.propTypes = {
  link: PropTypes.string.isRequired,
};

export default MemberSocialTwitter;
