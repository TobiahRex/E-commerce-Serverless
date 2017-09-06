import React from 'react';
import PropTypes from 'prop-types';
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

const { shape, string } = PropTypes;
MemberCard.propTypes = {
  MemberCardPhoto: shape({
    src: string,
  }).isRequired,
  MemberCardTitle: shape({
    header: string,
    subHeader: string,
  }).isRequired,
  MemberCardBlurb: shape({
    blurb: string,
  }).isRequired,
  Socials: shape({
    facebook: string,
    github: string,
    instragram: string,
    twitter: string,
    linkedin: string,
  }).isRequired,
};
export default MemberCard;
