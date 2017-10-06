import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

function OptionsHdr() {
  return (
    <div className="product-options__options-hdr">
      <h4 className="options-hdr__hdr-text">
        <IntlMsg id="product.single.nicotine.title" />
      </h4>
    </div>
  );
}
export default OptionsHdr;
