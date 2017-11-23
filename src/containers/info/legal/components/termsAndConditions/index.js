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

function TermsAndConditions({ intl }) {
  const {
    messages: {
      'legal.policy.terms.breadCrumb.paths1': bcPaths1,
      'legal.policy.terms.breadCrumb.lastCrumb': lastCrumb,
      'legal.policy.terms.header.title': header,
    },
  } = intl;

  return (
    <div className="terms-conditions">
      <BreadCrumb
        paths={[bcPaths1]}
        classes={['home']}
        destination={['']}
        lastCrumb={lastCrumb}
      />
      <HdrPage header={header} />
      <br />
      <div className="terms-conditions__content-container">
        <div className="content-container__terms-conditions-content">
          <div className="terms-conditions-content__hdr-container">
            <h4 className="legal_hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.terms.restrictions.title" />
            </h4>
          </div>
          <div className="terms-conditions-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.terms.restrictions.desc" />
            </p>
          </div>
        </div>
        <div className="content-container__terms-conditions-content">
          <div className="terms-conditions-content__hdr-container">
            <h4 className="legal_hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.terms.disclaimer.title" />
            </h4>
          </div>
          <div className="terms-conditions-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.terms.disclaimer.desc" />
            </p>
          </div>
        </div>
        <div className="content-container__terms-conditions-content">
          <div className="terms-conditions-content__hdr-container">
            <h4 className="legal_hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.terms.links.title" />
            </h4>
          </div>
          <div className="terms-conditions-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.terms.links.desc" />
            </p>
          </div>
        </div>
        <div className="content-container__terms-conditions-content">
          <div className="terms-conditions-content__hdr-container">
            <h4 className="legal_hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.terms.submissions.title" />
            </h4>
          </div>
          <div className="terms-conditions-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.terms.submissions.desc" />
            </p>
          </div>
        </div>
        <div className="content-container__terms-conditions-content">
          <div className="terms-conditions-content__hdr-container">
            <h4 className="legal_hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.terms.termination.title" />
            </h4>
          </div>
          <div className="terms-conditions-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.terms.termination.desc" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
TermsAndConditions.propTypes = {
  intl: intlShape.isRequired,
};
const TermsAndConditionsWithIntl = injectIntl(TermsAndConditions);
const TermsAndConditionsWithIntlAndLifecycle = lifecycle({
  componentWillUpdate() {
    WebflowAnimations();
  },
})(TermsAndConditionsWithIntl);
export default TermsAndConditionsWithIntlAndLifecycle;
