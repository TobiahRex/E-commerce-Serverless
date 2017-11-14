import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

function PopularProductHdr() {
  return (
    <div className="middle-section__section-hdr">
      <h2 className="section-hdr__flavor-hdr">
        <IntlMsg id="navbar.nav.juices.choose-flavor.title" />
      </h2>
    </div>
  );
}
export default PopularProductHdr;
