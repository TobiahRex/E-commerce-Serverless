import React from 'react';
import PropTypes from 'prop-types';

const MemberCardPhoto = props => (
  <div className="about__container--img">
    <img
      alt="member"
      className="about-container__staff staff--image"
      role="presentation"
      src={props.src}
    />
  </div>
);

MemberCardPhoto.propTypes = {
  src: PropTypes.string.isRequired,
};

export default MemberCardPhoto;
