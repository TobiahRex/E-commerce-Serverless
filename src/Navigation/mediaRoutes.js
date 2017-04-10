import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
import About from '../Pages/Legal/about/';
import ContactUs from '../Pages/Legal/contactUs';
import Phone from '../Pages/Legal/phone';
import UserStories from '../Pages/Media/userStories';
import VapeNews from '../Pages/Media/vapeNews';
import Faqs from '../Pages/Legal/faqs';
import MissionStatement from '../Pages/Legal/missionStatement';
import SocialMedia from '../Pages/Legal/socialMedia';
import Wholesale from '../Pages/Legal/wholesale';
import Affiliates from '../Pages/Legal/affiliateProgram';

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
