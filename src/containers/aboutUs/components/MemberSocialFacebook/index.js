import React from 'react';
import FontAwesome from 'react-fontawesome';

import { WebflowJs } from './assets/utils';

const MemberSocialFacebook = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="staff__social-media">
      <a className="social-media--link staff__social-media" href="http://facebook.com/nj2jp">
        <FontAwesome name="facebook" />
      </a>
    </div>
  );
};


export default MemberSocialFacebook;
