import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Legal -------------------------------
import NicotineDisclaimer from '../containers/legal/nicotineDisclaimer';
import Shipping from '../containers/legal/shippingPolicy';
import Returns from '../containers/legal/returnsPolicy';
import PrivacyPolicy from '../containers/legal/privacyPolicy';
import TermsConditions from '../containers/legal/termsConditions';

const LegalRoutes = () => (
  <div>
    <Route path="nicotine_disclaimer" component={NicotineDisclaimer} />
    <Route path="return_policy" component={Returns} />
    <Route path="shipping_policy" component={Shipping} />
    <Route path="privacy_policy" component={PrivacyPolicy} />
    <Route path="terms_and_conditions" component={TermsConditions} />
  </div>
);

export default LegalRoutes;
