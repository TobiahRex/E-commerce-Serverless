import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  MemberSocialFacebook,
  MemberSocialGithub,
  MemberSocialLinkedin,
  MemberSocialTwitter,
  MemberSocialInstagram,
} from '../../components';

const MemberCardSocial = (props) => {
  WebflowJs(); //eslint-disable-line

  const {
    facebook,
    github,
    twitter,
    linkedin,
    instagram,
  } = props.socials;

  return (
    <div className="about-container__staff staff--social-media">
      {facebook && <MemberSocialFacebook link={facebook} />}
      {github && <MemberSocialGithub link={github} />}
      {linkedin && <MemberSocialLinkedin link={linkedin} />}
      {twitter && <MemberSocialTwitter link={twitter} />}
      {instagram && <MemberSocialInstagram link={instagram} />}
    </div>
  );
};
const { shape, string } = PropTypes;
MemberCardSocial.propTypes = {
  socials: shape({
    facebook: string.isRequired,
    github: string.isRequired,
    instagram: string.isRequired,
    twitter: string.isRequired,
    linkedin: string.isRequired,
  }).isRequired,
};

export default MemberCardSocial;
