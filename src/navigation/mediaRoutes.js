import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
// import About from '../containers/legal/components/about/';
// import ContactUs from '../containers/contactUs';
import Phone from '../containers/legal/components/phone';
// import UserStories from '../containers/media/userStories';
import VapeNews from '../containers/media/vapeNews';
import Faqs from '../containers/legal/faqs';
import MissionStatement from '../containers/legal/missionStatement';
import SocialMedia from '../containers/legal/socialMedia';
import Wholesale from '../containers/legal/wholesale';
import Affiliates from '../containers/legal/affiliateProgram';

const errorLoading = (error) => {
  throw new Error(`Dynamic page loading failed ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);

const MediaRoutes = () => (
  <div>
    <Route
      path="/about"
      getComponent={(_, cb) => {
        import('../containers/aboutUs' /* webpackChunkName: "about" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    {/* <Route path="/about" component={About} /> */}
    <Route
      path="/contact_us"
      getComponent={(_, cb) => {
        import('../containers/contactUs' /* webpackChunkName: "contact-us" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/stories"
      getComponent={(_, cb) => {
        import('../containers/userStories' /* webpackChunkName: "contact-us" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route path="/phone" component={Phone} />
    <Route path="/vape_news" component={VapeNews} />
    <Route path="/social_media" component={SocialMedia} />
    <Route path="/mission_statement" component={MissionStatement} />
    <Route path="/faqs" component={Faqs} />
    <Route path="/wholesale" component={Wholesale} />
    <Route path="/affiliate_program" component={Affiliates} />
  </div>
);

export default MediaRoutes;
