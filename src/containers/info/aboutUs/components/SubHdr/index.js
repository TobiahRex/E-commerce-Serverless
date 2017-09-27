import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

const SubHdr = () => (
  <div className="about__container" data-ix="fade-in-2">
    <h2 className="about-container__sub-heading">
      <IntlMsg id="aboutus.header.subtitle" />
    </h2>
  </div>
);


export default SubHdr;
