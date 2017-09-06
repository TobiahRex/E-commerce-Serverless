import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const CardHeader = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <h3 className="reviews-content__text text--heading">
      {props.header}
    </h3>
  );
};

const { string } = PropTypes;
CardHeader.propTypes = {
  header: string,
};

export default CardHeader;
