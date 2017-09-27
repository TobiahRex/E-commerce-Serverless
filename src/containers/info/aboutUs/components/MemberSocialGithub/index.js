import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const MemberSocialGithub = props => (
  <div className="staff__social-media">
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="social-media--link staff__social-media"
      href={props.link}
    >
      <FontAwesome name="github" />
    </a>
  </div>
);

MemberSocialGithub.propTypes = {
  link: PropTypes.string.isRequired,
};

export default MemberSocialGithub;
