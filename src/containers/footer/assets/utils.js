export WebflowJs from '../../../webflow/webflow.javascript.js';
export const inputsData = [{
  component: 'FooterHdr',
  props: {
    section: 'name',
    title: 'home.footer.general.title',
  },
}, {
  component: 'FooterList',
  props: {
    section: 'general',
    list: [
      {
        link: '/contact_us',
        title: 'home.footer.general.contactUs',
      },
      {
        link: '/vape_news',
        title: 'home.footer.general.vapeNews',
      },
      {
        link: '/product_reviews',
        title: 'home.footer.general.productReviews',
      },
      {
        link: '/user_stories',
        title: 'home.footer.general.userStories',
      },
    ],
  },
}];
export apiActions from '../../../redux/api';
export toasterActions from '../../../redux/toaster';
export CheckForToast from '../../../services/utils/checkForToast';
export CleanOffTypename from '../../../services/utils/cleanOffTypename';
