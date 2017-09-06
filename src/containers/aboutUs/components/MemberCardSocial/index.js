import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  MemberSocialFacebook,
  MemberSocialLinkedin,
  MemberSocialTwitter,
  MemberCardSocialInstagram,
} from '../../components';

const MemberCardSocial = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="about-container__staff staff--social-media">
      <MemberSocialFacebook />
      <MemberSocialLinkedin />
      <MemberSocialTwitter />
      <MemberCardSocialInstagram />
    </div>
  );
};


export default MemberCardSocial;
