import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const CardImg = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <img alt="avatar" className="reviews-content__image" src={props.src} />
  );
};

CardImg.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CardImg;
