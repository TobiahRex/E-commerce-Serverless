import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const CardMoreLink = (props) => {
  WebflowJs();
  const {
    link,
  } = props;

  return (
    <a
      className="content--read-more-link news__content"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      Read more...
    </a>
  );
};
CardMoreLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CardMoreLink;
