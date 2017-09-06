import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const CardBlurb = (props) => {
  WebflowJs(); //eslint-disable-line
  const {
    content,
  } = props;

  return (
    <p
      className="content-article news__content"
    >
      {content}
    </p>
  );
};

CardBlurb.propTypes = {
  content: PropTypes.string.isRequired,
};
export default CardBlurb;
