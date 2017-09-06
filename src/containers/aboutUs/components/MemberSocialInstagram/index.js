import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const MemberSocialInstagram = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="staff__social-media">
      <a className="social-media--link staff__social-media" href={props.link}>
        <FontAwesome name="instagram" />
      </a>
    </div>
  );
};


MemberSocialInstagram.propTypes = {
  link: PropTypes.string.isRequired,
};
export default MemberSocialInstagram;
