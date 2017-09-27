import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------

const errorLoading = (error) => {
  throw new Error(`Dynamic page loading failed ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);

const MediaRoutes = () => (
  <div>
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
        import('../containers/media/userStories' /* webpackChunkName: "user-stories" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
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
