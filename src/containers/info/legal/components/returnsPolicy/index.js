import React from 'react';
import { lifecycle } from 'recompose';
import {
  injectIntl,
  intlShape,
  FormattedMessage as IntlMsg,
} from 'react-intl';
import {
  BreadCrumb,
  HdrPage,
} from './components';
import { WebflowAnimations } from './assets/utils';
import './assets/styles/style.css';

function ReturnsPolicy({ intl }) {
  const {
    messages: {
      'legal.policy.returns.breadCrumb.paths1': bcPaths1,
      'legal.policy.returns.breadCrumb.lastCrumb': lastCrumb,
      'legal.policy.returns.header.title': header,
    },
  } = intl;

  return (
    <div className="returns-body">
      <BreadCrumb
        paths={[bcPaths1]}
        classes={['home']}
        destination={['']}
        lastCrumb={lastCrumb}
      />
      <HdrPage header={header} />
      <br />
      <div className="returns-body__content-container">
        <div className="content-container__returns-content">
          <div className="returns-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.returns.refunds.title" />
            </h4>
          </div>
          <div className="returns-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.returns.refunds.desc" />
            </p>
          </div>
        </div>
        <div className="content-container__returns-content">
          <div className="returns-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.returns.cancellations.title" />
            </h4>
          </div>
          <div className="returns-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.returns.cancellations.desc" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
ReturnsPolicy.propTypes = {
  intl: intlShape.isRequired,
};
const ReturnsPolicyWithIntl = injectIntl(ReturnsPolicy);
const ReturnsPolicyWithIntlAndLifecycle = lifecycle({
  componentDidUpdate() {
    WebflowAnimations();
  },
})(ReturnsPolicyWithIntl);
export default ReturnsPolicyWithIntlAndLifecycle;
