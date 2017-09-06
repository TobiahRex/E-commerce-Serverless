import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  MemberSocialFacebook,
  MemberSocialLinkedin,
  MemberSocialTwitter,
  MemberCardSocialInstagram,
} from '../../components';

const MemberCardSocial = (props) => {
  WebflowJs(); //eslint-disable-line

  const {
    facebook,
    twitter,
    linkedin,
    instagram,
  } = props;

  return (
    <div className="about-container__staff staff--social-media">
      {facebook && <MemberSocialFacebook />}
      {linkedin && <MemberSocialLinkedin />}
      {twitter && <MemberSocialTwitter />}
      {instagram && <MemberCardSocialInstagram />}
    </div>
  );
};
MemberCardSocial.propTypes = {
  facebook: PropTypes.bool.isRequired,
  instagram: PropTypes.bool.isRequired,
  twitter: PropTypes.bool.isRequired,
  linkedin: PropTypes.bool.isRequired,
};

export default MemberCardSocial;
