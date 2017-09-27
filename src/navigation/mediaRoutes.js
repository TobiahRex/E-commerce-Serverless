import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
import Phone from '../containers/info/legal/components/phone';
import VapeNews from '../containers/media/vapeNews/';
import MissionStatement from '../containers/info/legal/missionStatement';
import SocialMedia from '../containers/info/legal/socialMedia';
import Wholesale from '../containers/info/legal/wholesale';
import Affiliates from '../containers/info/legal/affiliateProgram';

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
        import('../containers/media/contactUs' /* webpackChunkName: "contact-us" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/stories"
      getComponent={(_, cb) => {
        import('../containers/userStories' /* webpackChunkName: "user-stories" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route path="/phone" component={Phone} />
    <Route path="/vape_news" component={VapeNews} />
    <Route path="/social_media" component={SocialMedia} />
    <Route path="/mission_statement" component={MissionStatement} />
    <Route
      path="/faqs"
      getComponent={(_, cb) => {
        import('../containers/legal/components/faqs' /* webpackChunkName: "faqs" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route path="/wholesale" component={Wholesale} />
    <Route path="/affiliate_program" component={Affiliates} />
  </div>
);

export default MediaRoutes;
