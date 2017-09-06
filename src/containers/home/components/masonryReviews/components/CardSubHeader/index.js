import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const CardSubHeader = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <p className="reviews-content__text text--sub-heading">
      {props.subHeader}
    </p>
  );
};

const { string } = PropTypes;
CardSubHeader.propTypes = {
  subHeader: string,
};

export default CardSubHeader;
