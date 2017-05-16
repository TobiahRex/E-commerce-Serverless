import React from 'react';

import TermsConditions from './userTermsConditions';
import PrivacyPolicy from './userPrivacyPolicy';
import ShippingPolicy from './userShippingPolicy';
import ReturnPolicy from './userReturnPolicy';
import NicotineDisclaimer from './userNicotineDisclaimer';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

const UserLegal = {
  TermsConditions: ({ location }) =>
    <TermsConditions location={location} />,
  PrivacyPolicy: ({ location }) =>
    <PrivacyPolicy location={location} />,
  ShippingPolicy: ({ location }) =>
    <ShippingPolicy location={location} />,
  ReturnPolicy: ({ location }) =>
    <ReturnPolicy location={location} />,
  NicotineDisclaimer: ({ location }) =>
    <NicotineDisclaimer location={location} />,
};

UserLegal.TermsConditions.propTypes = propTypes;
UserLegal.PrivacyPolicy.propTypes = propTypes;
UserLegal.ShippingPolicy.propTypes = propTypes;
UserLegal.ReturnPolicy.propTypes = propTypes;
UserLegal.NicotineDisclaimer.propTypes = propTypes;
export default UserLegal;
