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
      <br />
      <div className="main__body">
        <h4>
          <IntlMsg id="legal.policy.returns.refunds.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.returns.refunds.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.returns.cancellations.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.returns.cancellations.desc" />
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
