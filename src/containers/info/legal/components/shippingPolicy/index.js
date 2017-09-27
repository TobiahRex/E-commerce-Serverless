import React from 'react';
import {
  injectIntl,
  intlShape,
  FormattedMessage as IntlMsg,
} from 'react-intl';
import {
  HdrPage,
  BreadCrumb,
} from './components';

function ShippingPolicy({ intl }) {
  const {
    messages: {
      'legal.breadCrumb.paths1': bcPaths1,
      'legal.breadCrumb.lastCrumb': lastCrumb,
      'legal.policy.shipping.title': header,
    },
  } = intl;
  return (
    <div className="shipping-body">
      <BreadCrumb
        paths={[bcPaths1]}
        classes={['home']}
        destination={['']}
        lastCrumb={lastCrumb}
      />
      <HdrPage header={header} />
      <br />
      <div className="shipping-body__content-container">
        <div className="content-container__shipping-content">
          <div className="shipping-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.shipping.order-process.title" />
            </h4>
          </div>
          <div className="shipping-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.shipping.order-process.desc" />
            </p>
          </div>
        </div>
        <h4>
          <IntlMsg id="legal.policy.shipping.quantity-restrictions.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.shipping.quantity-restrictions.blurb1" />
          <a
            target="_blank"
            className="required"
            href="http://www.mhlw.go.jp/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/dl/kojinyunyu151130-04.pdf"
            rel="noopener noreferrer"
          >
            <IntlMsg id="legal.policy.shipping.quantity-restrictions.blurb2" />
          </a>.
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.shipping.cods.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.shipping.cods.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.shipping.hurry.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.shipping.hurry.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.shipping.tax.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.shipping.tax.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.shipping.customer-service.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.shipping.customer-service.desc" />
        </p>
      </div>
    </div>
  );
}
ShippingPolicy.propTypes = {
  intl: intlShape.isRequired,
};
const ShippingPolicyWithIntl = injectIntl(ShippingPolicy);
export default ShippingPolicyWithIntl;
