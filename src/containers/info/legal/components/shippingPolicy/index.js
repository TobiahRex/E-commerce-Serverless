import React from 'react';
import { lifecycle } from 'recompose';
import {
  injectIntl,
  intlShape,
  FormattedMessage as IntlMsg,
} from 'react-intl';
import {
  HdrPage,
  BreadCrumb,
} from './components';
import {
  WebflowAnimations,
} from './assets/utils/';
import './assets/styles/style.css';

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
        <div className="content-container__shipping-content">
          <div className="shipping-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.shipping.quantity-restrictions.title" />
            </h4>
          </div>
          <div className="shipping-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.shipping.quantity-restrictions.blurb1" />
            </p>
          </div>
        </div>
        <div className="content-container__shipping-content">
          <div className="shipping-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.shipping.cods.title" />
            </h4>
          </div>
          <div className="shipping-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.shipping.cods.desc" />
            </p>
          </div>
        </div>
        <div className="content-container__shipping-content">
          <div className="shipping-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.shipping.tax.title" />
            </h4>
          </div>
          <div className="shipping-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.shipping.tax.desc" />
            </p>
          </div>
        </div>
        <div className="content-container__shipping-content">
          <div className="shipping-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.shipping.customer-service.title" />
            </h4>
          </div>
          <div className="shipping-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.shipping.customer-service.desc" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
ShippingPolicy.propTypes = {
  intl: intlShape.isRequired,
};
const ShippingPolicyWithIntl = injectIntl(ShippingPolicy);
const ShippingPolicyWithLifecycleAndIntl = lifecycle({
  componentDidUpdate() {
    WebflowAnimations();
  },
})(ShippingPolicyWithIntl);
export default ShippingPolicyWithLifecycleAndIntl;
