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
    <div className="shipping-policy__main">
      <BreadCrumb
        paths={[bcPaths1]}
        classes={['home']}
        destination={['']}
        lastCrumb={lastCrumb}
      />
      <HdrPage header={header} />
      <br />
      <div className="main__body">
        <h4>
          <IntlMsg id="legal.policyy.shipping.order-process.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policyy.shipping.order-process.desc" />
        </p>
        <br />
        <br />
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
