import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const MemberCardPhoto = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <img
      alt="member"
      className="about-container__staff staff--image"
      role="presentation"
      src={props.src}
    />
  );
};

MemberCardPhoto.propTypes = {
  src: PropTypes.string.isRequired,
};

export default MemberCardPhoto;
