import React from 'react';
import PropTypes from 'prop-types';
import {
  MemberSocialFacebook,
  MemberSocialGithub,
  MemberSocialLinkedin,
  MemberSocialTwitter,
  MemberSocialInstagram,
} from '../../components';

const MemberCardSocial = (props) => {
  const {
    facebook,
    github,
    twitter,
    linkedin,
    instagram,
  } = props.socials;

  return (
    <div className="about-container__staff staff--social-media">
      <div className="about-container__staff staff--social-media staff-social-media--mobile">
        {facebook && <MemberSocialFacebook link={facebook} />}
        {github && <MemberSocialGithub link={github} />}
        {linkedin && <MemberSocialLinkedin link={linkedin} />}
        {twitter && <MemberSocialTwitter link={twitter} />}
        {instagram && <MemberSocialInstagram link={instagram} />}
      </div>
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
