import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  MemberCardPhoto,
  MemberCardTitle,
  MemberCardBlurb,
} from '../../components';

const MemberCard = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="about-container__staff">
      <MemberCardPhoto />
      <div className="about-container__staff staff--content">
        <MemberCardTitle />
        <div className="about-container__staff staff--scrolling-cointainer">
          <MemberCardBlurb />
        </div>
      </div>
    </div>
  );
};


export default MemberCard;
