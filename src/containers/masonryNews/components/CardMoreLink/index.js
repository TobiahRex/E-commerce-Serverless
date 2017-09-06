import React from 'react';

import { WebflowJs } from './assets/utils';

const CardMoreLink = (props) => {
  WebflowJs(); //eslint-disable-line
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


export default CardMoreLink;
