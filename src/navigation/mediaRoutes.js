import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
import About from '../containers/legal/components/about/';
import ContactUs from '../containers/legal/components/contactUs';
import Phone from '../containers/legal/components/phone';
import UserStories from '../containers/media/userStories';
import VapeNews from '../containers/media/vapeNews';
import Faqs from '../containers/legal/faqs';
import MissionStatement from '../containers/legal/missionStatement';
import SocialMedia from '../containers/legal/socialMedia';
import Wholesale from '../containers/legal/wholesale';
import Affiliates from '../containers/legal/affiliateProgram';

const MediaRoutes = () => (
  <div>
    <Route path="/about" component={About} />
    <Route path="/contact_us" component={ContactUs} />
    <Route path="/phone" component={Phone} />
    <Route path="/vape_news" component={VapeNews} />
    <Route path="/stories" component={UserStories} />
    <Route path="/social_media" component={SocialMedia} />
    <Route path="/mission_statement" component={MissionStatement} />
    <Route path="/faqs" component={Faqs} />
    <Route path="/wholesale" component={Wholesale} />
    <Route path="/affiliate_program" component={Affiliates} />
  </div>
);

export default MediaRoutes;
