import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function ProductsTop() {
  return (
    <div className="floating-juice-container__top-section">
      <div className="top-section__juice-hdr">
        <h2 className="juice-hdr__hdr-blurb">
          <IntlMsg id="navbar.nav.juices.description.title" />
        </h2>
      </div>
      <div className="top-section__juice-blurb">
        <p className="paragraph">
          <IntlMsg id="navbar.nav.juices.description" />
        </p>
      </div>
    </div>
  );
}
