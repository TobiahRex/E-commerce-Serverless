import React from 'react';

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


export default CardBlurb;
