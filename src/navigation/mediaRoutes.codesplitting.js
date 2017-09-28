import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
import Contactus from '../containers/media/contactUs';
import Stories from '../containers/media/userStories';
import Vapenews from '../containers/media/vapeNews/';

const errorLoading = (error) => {
  throw new Error(`Dynamic page loading failed ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);

const MediaRoutes = () => (
  <div>
    <Route
      path="/contact_us"
      component={Contactus}
    />
    <Route
      path="/stories"
      component={Stories}
    />
    <Route
      path="/vape_news"
      getComponent={(_, cb) => {
        import('../containers/media/vapeNews/' /* webpackChunkName: "vape-news" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/social_media"
      getComponent={(_, cb) => {
        import('../containers/media/socialMedia' /* webpackChunkName: "social-media" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
  </div>
);

export default MediaRoutes;
