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
        When you register with a Social Provider, you are able to choose which data we receive from that social provider on your behalf.  You may change the default list of data Nic Juice To Japan (NJ2JP) receives at the time of registration.  Be advised, you must provide at least your email address from the social provider so we can send you an Order Invoice upon successfully purchasing a product.
        <br />
        You may have choices available to you through the device or software you use to access Nic Juice To Japan (NJ2JP). For example:
        <br />
        * The browser you use may provide you with the ability to control cookies or other types of local data storage;
        <br />
        * Your mobile device may provide you with choices around how and whether location or other data is shared with us.
        <br />
        To learn more about these choices, please see the information provided by the device or software provider.
        <br />
        <br />
        <h4>HOW DO WE SHARE THE INFORMATION WE COLLECT?</h4>
        <br />
        Pinterest is a tool people use to find their inspirations, make them a reality, and inspire others in the process. When you create public boards and pins, anyone can view them. You may also provide us with profile page information that that anyone can view. The other limited instances where we may share your personal information include:
        <br />
        <br />
        * We may employ third party companies or individuals to process personal information on our behalf based on our instructions and in compliance with this Privacy Policy. For example, we may share data with a security consultant to help us get better at identifying spam or with our accountants to make sure we’re keeping the books right. In addition, some of the information we request may be collected by third party providers on our behalf.
        <br />
        * If we believe that disclosure is reasonably necessary to comply with a law, regulation or legal request; to protect the safety, rights, or property of the public, any person, or Nic Juice To Japan (NJ2JP); or to detect, prevent, or otherwise address fraud, security or technical issues.
        <br />
        * We may engage in a merger, acquisition, bankruptcy, dissolution, reorganization, or similar transaction or proceeding that involves the transfer of the information described in this Policy.
        <br />
        We may also share aggregated or non-personally identifiable information with our partners or others.
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
