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
      <div className="main__body">
        <p>
          <IntlMsg id="legal.policy.privacy.header.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.privacy.what-info.title" />
        </h4>
        <br />
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
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.privacy.how-used.title" />
        </h4>
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
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.privacy.what-choices.title" />
        </h4>
        <br />
        <IntlMsg id="legal.policy.privacy.what-choices.desc1" />
        {/*
            TODO:  This info is not accurate until we build a User Dashboard.
            <br />
            * Access and change information in your profile page at any time, choose whether your profile page is available to search engines, or choose whether others can find your Nic Juice To Japan (NJ2JP) account using your email address;
            <br />
        * Close your account at any time. When you close your account, we’ll deactivate it. We may retain archived copies of your information as required by law or for legitimate business purposes (including to help address fraud and spam). */}
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
        <br />
        <h4>
          <IntlMsg id="legal.policy.privacy.sharing.title" />
        </h4>
        <br />
        <IntlMsg id="legal.policy.privacy.sharing.desc1" />
        <br />
        <br />
        <IntlMsg id="legal.policy.privacy.sharing.desc2" />
        <br />
        <IntlMsg id="legal.policy.privacy.sharing.desc3" />
        <br />
        <IntlMsg id="legal.policy.privacy.sharing.desc4" />
        <br />
        <IntlMsg id="legal.policy.privacy.sharing.desc5" />
        <br />
        <br />
        <h4>HOW DO WE MAKE CHANGES TO THIS POLICY?</h4>
        <br />
        We may change this policy from time to time, and if we do we’ll post any changes on this page. If you continue to use our website after those changes are in effect, you agree to the revised policy. If the changes are significant, we may provide more prominent notice or obtain your consent as required by law.
        <br />
        <br />
      </div>
    </div>
  );
}
PrivacyPolicy.propTypes = {
  intl: intlShape.isRequired,
};
const PrivacyPolicyWithIntl = injectIntl(PrivacyPolicy);
export default PrivacyPolicyWithIntl;
