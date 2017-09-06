import React from 'react';

import { WebflowJs } from './assets/utils';

const CardImg = props => {
  WebflowJs(); //eslint-disable-line
  const { src } = props;

  return <img className="masonry-container__news news--image" role="presentation" src={src} />;
};

export default CardImg;
