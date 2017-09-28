import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
import About from '../containers/info/aboutUs';
import Faqs from '../containers/info/faqs';
import Returns from '../containers/info/legal/components/returnsPolicy';
import Shipping from '../containers/info/legal/components/shippingPolicy';
import Privacy from '../containers/info/legal/components/privacyPolicy';
import Terms from '../containers/info/legal/components/termsAndConditions';
import Nicotine from '../containers/info/legal/components/nicotineDisclaimer';
// import Wholesale from '../containers/info/legal/wholesale';
// import Affiliates from '../containers/info/legal/affiliateProgram';

const InfoRoutes = () => (
  <div>
    <Route
      path="/about"
      component={About}
    />
    <Route
      path="/faqs"
      component={Faqs}
    />
    <Route
      path="/return_policy"
      component={Returns}
    />
    <Route
      path="/shipping_policy"
      component={Shipping}
    />
    <Route
      path="/privacy_policy"
      component={Privacy}
    />
    <Route
      path="/terms_and_conditions"
      component={Terms}
    />
    <Route
      path="/nicotine_disclaimer"
      component={Nicotine}
    />
    {/* <Route path="/wholesale" component={Wholesale} /> */}
    {/* <Route path="/affiliate_program" component={Affiliates} /> */}
  </div>
);

export default InfoRoutes;
