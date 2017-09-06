import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  MemberSocialFacebook,
  MemberSocialLinkedin,
  MemberSocialTwitter,
  MemberSocialInstagram,
} from '../../components';

const MemberCardSocial = (props) => {
  WebflowJs(); //eslint-disable-line

  const {
    facebook,
    twitter,
    linkedin,
    instagram,
  } = props.socials;

  return (
    <div className="about-container__staff staff--social-media">
      {facebook && <MemberSocialFacebook />}
      {linkedin && <MemberSocialLinkedin />}
      {twitter && <MemberSocialTwitter />}
      {instagram && <MemberSocialInstagram />}
    </div>
  );
};
const { shape, bool } = PropTypes;
MemberCardSocial.propTypes = {
  socials: shape({
    facebook: bool.isRequired,
    instagram: bool.isRequired,
    twitter: bool.isRequired,
    linkedin: bool.isRequired,
  }).isRequired,
};

export default MemberCardSocial;
