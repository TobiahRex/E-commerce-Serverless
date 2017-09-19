import React from 'react';
import {
  injectIntl,
  intlShape,
  FormattedMessage as IntlMsg,
} from 'react-intl';
import {
  BreadCrumb,
  HdrPage,
} from './components';

function ReturnsPolicy({ intl }) {
  const {
    messages: {
      'legal.breadCrumb.paths1': bcPaths1,
      'legal.breadCrumb.lastCrumb': lastCrumb,
      'legal.policy.returns.header.title': header,
    },
  } = intl;

  return (
    <div className="returns-policy__main">
      <BreadCrumb
        paths={[bcPaths1]}
        classes={['home']}
        destination={['']}
        lastCrumb={lastCrumb}
      />
      <HdrPage header={header} />
      <div className="main__body">
        <h4>REFUNDS</h4>
        <br />
        <p>
          100% Money back guarantee for defective items. Defective items or missing parts must be reported within 15 days of delivery. Shipping damage(s) must be reported immediately (same day as delivery | UTC +9:00 TimeZone) upon receipt of package(s). Returns and exchanges for any other reason will not be accepted.
        </p>
        <br />
        <br />
        <h4>CANCELLATIONS</h4>
        <br />
        <p>
          Cancellations on orders can be requestd via email to support@nj2jp.com (include your order number located in your invoice email as well as provided on the website directly after successfully purchasing your order).  A Confirmation email from Nic Juice To Japan (NJ2JP) for cancellation(s) must be received by the customer before the close of business on the same day (Before 24:00 | UTC +9:00 TimeZone) of purchase for the cancellation to be valid.
        </p>
      </div>
    </div>
  );
}
ReturnsPolicy.propTypes = {
  intl: intlShape.isRequired,
};
const ReturnsPolicyWithIntl = injectIntl(ReturnsPolicy);
export default ReturnsPolicyWithIntl;
