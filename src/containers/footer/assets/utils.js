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
    sections: [
      {
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
      {
        section: 'customer',
        list: [
          {
            link: '/privacy_policy',
            title: 'home.footer.customer.privacyPolicy',
          },
          {
            link: '/shipping_policy',
            title: 'home.footer.customer.shippingPolicy',
          },
          {
            link: '/return_policy',
            title: 'home.footer.customer.returnPolicy',
          },
          {
            link: '/nicotine_disclaimer',
            title: 'home.footer.customer.nicotineDisclaimer',
          },
          {
            link: '/terms_conditions',
            title: 'home.footer.customer.termsConditions',
          },
        ],
      },
      {
        section: 'contact',
        list: [
          {
            link: '/privacy_policy',
            title: 'home.footer.customer.privacyPolicy',
          },
          {
            link: '/shipping_policy',
            title: 'home.footer.customer.shippingPolicy',
          },
          {
            link: '/return_policy',
            title: 'home.footer.customer.returnPolicy',
          },
          {
            link: '/nicotine_disclaimer',
            title: 'home.footer.customer.nicotineDisclaimer',
          },
          {
            link: '/terms_conditions',
            title: 'home.footer.customer.termsConditions',
          },
        ],
      },
    ],
  },
}];
export apiActions from '../../../redux/api';
export toasterActions from '../../../redux/toaster';
export CheckForToast from '../../../services/utils/checkForToast';
export CleanOffTypename from '../../../services/utils/cleanOffTypename';
