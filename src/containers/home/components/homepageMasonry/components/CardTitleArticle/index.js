import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const CardTitle = (props) => {
  WebflowJs();
  const {
    link,
    header,
  } = props;

  return (
    <a
      className="masonry-column__news news--heading-link w-inline-block"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h3 className="content--header news__content" >
        {header}
      </h3>
    </a>
  );
};
CardTitle.propTypes = {
  link: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default CardTitle;
