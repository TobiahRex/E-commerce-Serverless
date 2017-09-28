import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

const AboutBlurb = () => (
  <div className="about-section">
    <div className="about__container" data-ix="aboutus-fade-in">
      <p className="about-container__body-text">
        <IntlMsg id="aboutus.header.blurb" />
      </p>
    </div>
  </div>
);

export default AboutBlurb;
