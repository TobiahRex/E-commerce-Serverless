import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const MemberSocialGithub = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
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
};

MemberSocialGithub.propTypes = {
  link: PropTypes.string.isRequired,
};

export default MemberSocialGithub;
