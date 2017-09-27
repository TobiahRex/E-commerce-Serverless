import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const MemberSocialLinkedin = props => (
  <div className="staff__social-media">
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="social-media--link staff__social-media"
      href={props.link}
    >
      <FontAwesome name="linkedin" />
    </a>
  </div>
);

MemberSocialLinkedin.propTypes = {
  link: PropTypes.string.isRequired,
};

export default MemberSocialLinkedin;
