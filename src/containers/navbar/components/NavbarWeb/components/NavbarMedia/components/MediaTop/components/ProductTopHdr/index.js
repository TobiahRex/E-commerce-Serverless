import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function ProductsTopHdr() {
  return (
    <div className="top-section__juice-hdr">
      <h2 className="juice-hdr__hdr-blurb">
        <IntlMsg id="navbar.nav.juices.description.title" />
      </h2>
    </div>
  );
}
