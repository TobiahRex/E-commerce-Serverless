import React from 'react';
import PropTypes from 'prop-types';

const CardImg = ({ src }) => (
  <img
    alt="articleImage"
    src={src}
    className="masonry-container__news news--image"
    role="presentation"
  />
);

CardImg.propTypes = {
  src: PropTypes.string.isRequired,
};
export default CardImg;
