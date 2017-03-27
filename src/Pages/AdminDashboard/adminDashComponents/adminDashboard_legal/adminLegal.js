import React, { PropTypes } from 'react';

import TermsConditions from './adminTermsConditions';
import PrivacyPolicy from './adminPrivacyPolicy';
import ShippingPolicy from './adminShippingPolicy';
import ReturnPolicy from './adminReturnPolicy';
import NicotineDisclaimer from './adminNicotineDisclaimer';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

const AdminLegal = {
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

AdminLegal.TermsConditions.propTypes = propTypes;
AdminLegal.PrivacyPolicy.propTypes = propTypes;
AdminLegal.ShippingPolicy.propTypes = propTypes;
AdminLegal.ReturnPolicy.propTypes = propTypes;
AdminLegal.NicotineDisclaimer.propTypes = propTypes;
export default AdminLegal;
