import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const MemberCardPhoto = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="about__container--img">
      <img
        alt="member"
        className="about-container__staff staff--image"
        role="presentation"
        src={props.src}
      />
    </div>
  );
};

MemberCardPhoto.propTypes = {
  src: PropTypes.string.isRequired,
};

export default MemberCardPhoto;
