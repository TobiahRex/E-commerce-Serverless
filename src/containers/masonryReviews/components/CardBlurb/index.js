import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const CardBlurb = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <p className="reviews-content__text text--review">
      {props.blurb}
    </p>
  );
};

const { string } = PropTypes;
CardBlurb.propTypes = {
  blurb: string,
};

export default CardBlurb;
