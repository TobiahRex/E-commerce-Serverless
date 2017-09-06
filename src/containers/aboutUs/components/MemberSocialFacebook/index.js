import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { WebflowJs } from './assets/utils';

const MemberSocialFacebook = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="staff__social-media">
      <a className="social-media--link staff__social-media" href={props.link}>
        <FontAwesome name="facebook" />
      </a>
    </div>
  );
};

MemberSocialFacebook.propTypes = {
  link: PropTypes.string.isRequired,
};

export default MemberSocialFacebook;
