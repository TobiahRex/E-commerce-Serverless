import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
import Contactus from '../containers/media/contactUs';
import Stories from '../containers/media/userStories';
import Vapenews from '../containers/media/vapeNews/';
import Social from '../containers/media/socialMedia';

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
      component={Vapenews}
    />
    <Route
      path="/social_media"
      component={Social}
    />
  </div>
);

export default MediaRoutes;
