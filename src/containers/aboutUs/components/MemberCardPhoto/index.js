import React from 'react';

import { WebflowJs } from './assets/utils';

const MemberCardPhoto = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <img className="about-container__staff staff--image" role="presentation" src="images/brian-wilson-264x200.png" />
  );
};


export default MemberCardPhoto;
