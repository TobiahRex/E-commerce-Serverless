import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { WebflowJs } from './assets/utils';

const AboutBlurb = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="about-container__body-text about__container">
      <div className="about-container about-continer__body-text">
        <p className="about-container__body-text">
          <IntlMsg id="aboutus.header.blurb" />
        </p>
      </div>
    </div>
  );
};


export default AboutBlurb;
