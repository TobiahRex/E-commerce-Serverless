import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const CardImg = (props) => {
  WebflowJs();

  const {
    src,
  } = props;

  return (
    <img
      alt="articleImage"
      src={src}
      className="masonry-container__news news--image"
      role="presentation"
    />
  );
};

CardImg.propTypes = {
  src: PropTypes.string.isRequired,
};
export default CardImg;
