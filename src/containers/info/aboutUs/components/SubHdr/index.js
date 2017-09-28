import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

const SubHdr = () => (
  <div className="about-section">
    <div className="about__container">
      <h2 className="about-container__sub-heading" data-ix="aboutus-fade-in-2">
        <IntlMsg id="aboutus.header.subtitle" />
      </h2>
    </div>
  </div>
);


export default SubHdr;
