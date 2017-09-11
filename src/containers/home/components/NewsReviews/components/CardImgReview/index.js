import React from 'react';
import PropTypes from 'prop-types';

const CardImg = ({ src }) => (
  <img alt="avatar" className="reviews-content__image" src={src} />
);

CardImg.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CardImg;
