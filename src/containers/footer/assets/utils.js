export WebflowJs from '../../../webflow/webflow.javascript.js';
export const inputsData = [
  {
    component: 'FooterHdr',
    props: {
      section: 'name',
      title: 'home.footer.general.title',
    },
  }, {
    component: 'FooterList',
    props: {
      section: 'general',
      items: [
        {
          link: '/contact_us',
          intlId: 'home.footer.general.contactUs',
        },
        {
          link: '/vape_news',
          intlId: 'home.footer.general.vapeNews',
        },
        {
          link: '/product_reviews',
          intlId: 'home.footer.general.productReviews',
        },
        {
          link: '/user_stories',
          intlId: 'home.footer.general.userStories',
        },
      ],
    },
  },
  {
    component: 'FooterList',
    props: {
      section: 'customer',
      items: [
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
  },
  {
    component: 'FooterList',
    props: {
      section: 'contact',
      items: [
        {
          link: 'tel:080-4053-8791',
          title: 'home.footer.contact.phone',
        },
        {
          link: 'mailto:contact@nj2jp.com',
          title: 'home.footer.contact.email',
        },
      ],
    },
  },
];
export apiActions from '../../../redux/api';
export toasterActions from '../../../redux/toaster';
export CheckForToast from '../../../services/utils/checkForToast';
export CleanOffTypename from '../../../services/utils/cleanOffTypename';
