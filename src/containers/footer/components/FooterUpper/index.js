import React from 'react';
import {
  FooterHdr,
  FooterList,
  FooterColumn,
  FooterSocialGrid,
} from '../';

const FooterUpper = () => (
  <div className="footer__upper footer__upper--landscape">
    <div className="footer__upper--container footer__upper--container--landscape">
      <div className="footer__upper--grid footer__upper--grid--landscape w-row">
        <FooterColumn section="general">
          <FooterHdr
            section="general"
            title="home.footer.general.title"
          />
          <FooterList
            section="general"
            items={[
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
            ]}
          />
        </FooterColumn>
        <FooterColumn section="customer" >
          <FooterHdr
            section="customer"
            title="home.footer.customer.title"
          />
          <FooterList
            section="general"
            items={[
              {
                link: '/privacy_policy',
                intlId: 'home.footer.customer.privacyPolicy',
              },
              {
                link: '/shipping_policy',
                intlId: 'home.footer.customer.shippingPolicy',
              },
              {
                link: '/return_policy',
                intlId: 'home.footer.customer.returnPolicy',
              },
              {
                link: '/nicotine_disclaimer',
                intlId: 'home.footer.customer.nicotineDisclaimer',
              },
              {
                link: '/terms_conditions',
                intlId: 'home.footer.customer.termsConditions',
              },
            ]}
          />
        </FooterColumn>

        <FooterColumn section="contact">

          <FooterHdr section="contact" title="home.footer.contact.title" />

          <FooterList
            section="general"
            items={[
              {
                link: 'tel:080-4053-8791',
                intlId: 'home.footer.contact.phone',
              },
              {
                link: 'mailto:contact@nj2jp.com',
                intlId: 'home.footer.contact.email',
              },
            ]}
          />
        </FooterColumn>
        <FooterSocialGrid />
      </div>
    </div>
  </div>
);
export default FooterUpper;
