import React from 'react';
import FontAwesome from 'react-fontawesome';

import { WebflowJs } from './assets/utils';

const MemberSocialTwitter = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="staff__social-media">
      <a className="social-media--link staff__social-media" href="#">
        <FontAwesome name="twitter" />
      </a>
    </div>
  );
};


export default MemberSocialTwitter;
