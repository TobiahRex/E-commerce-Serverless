import React from 'react';
import PropTypes from 'prop-types';

import TermsConditions from './userTermsConditions';
import PrivacyPolicy from './userPrivacyPolicy';
import ShippingPolicy from './userShippingPolicy';
import ReturnPolicy from './userReturnPolicy';
import NicotineDisclaimer from './userNicotineDisclaimer';

const { objectOf, any } = PropTypes;
const propTypes = { location: objectOf(any).isRequired };

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
