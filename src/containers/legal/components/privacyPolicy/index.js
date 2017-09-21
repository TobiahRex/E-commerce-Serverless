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
        <p>
          <IntlMsg id="legal.policy.privacy.what-info.desc1" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-info.desc2" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-info.desc3" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-info.desc4" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-info.desc5" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-info.desc6" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.privacy.how-used.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.how-used.desc1" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.how-used.desc2" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.how-used.desc3" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.how-used.desc4" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.how-used.desc5" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.privacy.what-choices.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-choices.desc1" />
        </p>
        {/*
            TODO:  This info is not accurate until we build a User Dashboard.
            <br />
            * Access and change information in your profile page at any time, choose whether your profile page is available to search engines, or choose whether others can find your Nic Juice To Japan (NJ2JP) account using your email address;
            <br />
        * Close your account at any time. When you close your account, we’ll deactivate it. We may retain archived copies of your information as required by law or for legitimate business purposes (including to help address fraud and spam). */}
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-choices.desc2" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-choices.desc3" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-choices.desc4" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-choices.desc5" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.what-choices.desc6" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.privacy.sharing.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.sharing.desc1" />
        </p>
        <br />
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.sharing.desc2" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.sharing.desc3" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.sharing.desc4" />
        </p>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.sharing.desc5" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.privacy.changes.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.privacy.changes.desc1" />
        </p>
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
