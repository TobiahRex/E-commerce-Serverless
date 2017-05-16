import React from 'react';
import PropTypes from 'prop-types';
import TermsConditions from './adminTermsConditions';
import PrivacyPolicy from './adminPrivacyPolicy';
import ShippingPolicy from './adminShippingPolicy';
import ReturnPolicy from './adminReturnPolicy';
import NicotineDisclaimer from './adminNicotineDisclaimer';

const { objectOf, any } = PropTypes;
const propTypes = { location: objectOf(any).isRequired };

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
