import React from 'react';
import PropTypes from 'prop-types';
import {
  MemberCardPhoto,
  MemberCardTitle,
  MemberCardBlurb,
  MemberCardSocial,
} from '../../components';

const MemberCard = props => (
  <div className="about-container__staff" data-ix={props.ix}>
    <MemberCardPhoto src={props.MemberCardPhoto.src} />
    <div className="about-container__staff staff--content">
      <MemberCardTitle
        class="content--heading staff__content"
        title={props.MemberCardTitle.header}
      />
      <MemberCardTitle
        class="content--sub-heading staff__content"
        title={props.MemberCardTitle.subHeader}
      />
      <MemberCardBlurb blurb={props.MemberCardBlurb.blurb} />
    </div>
    <MemberCardSocial socials={props.Socials} />
  </div>
);

const { shape, string } = PropTypes;
MemberCard.propTypes = {
  ix: string.isRequired,
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
