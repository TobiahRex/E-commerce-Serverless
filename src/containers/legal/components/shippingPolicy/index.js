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
          IN A HURRY?
        </h4>
        <br />
        <p>
          We offer priority handling and delivery on most items upon request. For special instructions, PLEASE ORDER BY PHONE.
        </p>
        <br />
        <br />
        <h4>SALES TAX</h4>
        <br />
        <p>
          We collect an exclusive sales tax when you place your order in compliance with tax requirements for the state of Washington. All shipments to Japan are subject to Washington State Sales Tax.
        </p>
        <br />
        <br />
        <h4>CUSTOMER SERVICE</h4>
        <br />
        <p>
          Our helpful customer service department is committed to assist you in every way. If you have a question or problem with your order, please call 1-855-587-8888 for Customer Service, Monday–Friday, 8am – 5pm (UTC +9). Or email us at support@vapeswitch.com 24 hours a day, 7 days a week. Special requests or adjustments need to be arranged with our Customer Service department before your order has shipped.
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
