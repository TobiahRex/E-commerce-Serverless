import React from 'react';
import P
import { WebflowJs } from './assets/utils';

import {
  MemberCardPhoto,
  MemberCardTitle,
  MemberCardBlurb,
  MemberCardSocial,
} from '../../components';

const MemberCard = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="about-container__staff">
      <MemberCardPhoto src={props.MemberCardPhoto.src} />
      <div className="about-container__staff staff--content">
        <MemberCardTitle
          header={props.MemberCardTitle.header}
          subHeader={props.MemberCardTitle.subHeader}
        />
        <div className="about-container__staff staff--scrolling-cointainer">
          <MemberCardBlurb blurb={props.MemberCardBlurb.blurb} />
        </div>
      </div>
      <MemberCardSocial socials={props.Socials} />
    </div>
  );
};


export default MemberCard;
