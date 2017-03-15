import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Legal -------------------------------
import NicotineDisclaimer from '../Pages/Legal/nicotineDisclaimer';
import Shipping from '../Pages/Legal/shippingPolicy';
import Returns from '../Pages/Legal/returnsPolicy';
import PrivacyPolicy from '../Pages/Legal/privacyPolicy';
import TermsConditions from '../Pages/Legal/termsConditions';

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
