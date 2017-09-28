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
import './assets/styles/style.css';

function PrivacyPolicy({ intl }) {
  const {
    messages: {
      'legal.policy.privacy.breadCrumb.paths1': bcPaths1,
      'legal.policy.privacy.breadCrumb.lastCrumb': lastCrumb,
      'legal.policy.privacy.header.title': header,
    },
  } = intl;

  return (
    <div className="privacy-policy__main">
      <BreadCrumb
        paths={[bcPaths1]}
        classes={['home']}
        destination={['']}
        lastCrumb={lastCrumb}
      />
      <HdrPage header={header} />
      <br />
      <div className="privacy-policy__content-container">
        <div className="privacy-content__blurb-container">
          <p className="blurb-container__blurb-text" data-ix="slide-from-right">
            <IntlMsg id="legal.policy.privacy.header.desc" />
          </p>
        </div>
        <div className="content-container__privacy-content">
          <div className="privacy-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.privacy.what-info.title" />
            </h4>
          </div>
          <div className="privacy-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.privacy.what-info.desc1" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-info.desc2" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-info.desc3" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-info.desc4" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-info.desc5" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-info.desc6" />
            </p>
          </div>
        </div>
        <div className="content-container__privacy-content">
          <div className="privacy-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.privacy.how-used.title" />
            </h4>
          </div>
          <div className="privacy-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <br />
              <IntlMsg id="legal.policy.privacy.how-used.desc1" />
              <br />
              <IntlMsg id="legal.policy.privacy.how-used.desc2" />
              <br />
              <IntlMsg id="legal.policy.privacy.how-used.desc3" />
              <br />
              <IntlMsg id="legal.policy.privacy.how-used.desc4" />
              <br />
              <IntlMsg id="legal.policy.privacy.how-used.desc5" />
            </p>
          </div>
        </div>
        <div className="content-container__privacy-content">
          <div className="privacy-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.privacy.what-choices.title" />
            </h4>
          </div>
          <div className="privacy-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.privacy.what-choices.desc1" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-choices.desc2" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-choices.desc3" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-choices.desc4" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-choices.desc5" />
              <br />
              <IntlMsg id="legal.policy.privacy.what-choices.desc6" />
              <br />
            </p>
          </div>
        </div>
        <div className="content-container__privacy-content">
          <div className="privacy-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.privacy.sharing.title" />
            </h4>
          </div>
          <div className="privacy-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.privacy.sharing.desc1" />
              <br />
              <IntlMsg id="legal.policy.privacy.sharing.desc2" />
              <br />
              <IntlMsg id="legal.policy.privacy.sharing.desc3" />
              <br />
              <IntlMsg id="legal.policy.privacy.sharing.desc4" />
              <br />
              <IntlMsg id="legal.policy.privacy.sharing.desc5" />
              <br />
            </p>
          </div>
        </div>
        <div className="content-container__privacy-content">
          <div className="privacy-content__hdr-container">
            <h4 className="hdr-container__hdr-blurb" data-ix="slide-from-left">
              <IntlMsg id="legal.policy.privacy.changes.title" />
            </h4>
          </div>
          <div className="privacy-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <IntlMsg id="legal.policy.privacy.changes.desc1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
PrivacyPolicy.propTypes = {
  intl: intlShape.isRequired,
};
const PrivacyPolicyWithIntl = injectIntl(PrivacyPolicy);
export default PrivacyPolicyWithIntl;
