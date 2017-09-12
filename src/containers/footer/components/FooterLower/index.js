import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

const FooterLower = () => (
  <div className="footer__lower footer__lower--landscape footer__lower--tablet">
    <div className="footer__lower--container footer__lower--container--landscape">
      <div className="footer__lower-content footer__lower-content--landscape">
        <div className="copyright-company copyright-company--landscape copyright-company--tablet">
          <div className="footer__lower-copyright">Copyright</div>
          <FontAwesome name="copyright" className="footer__copyright" />
          <div className="footer__lower--company">2017</div>
        </div>
        <div className="footer_company footer_company--landscape footer_company--tablet">
          <div className="footer__lower-copyright">
            <IntlMsg id="home.footer.madeWith.title" />
          </div>
          <FontAwesome name="heart" className="footer__heart" />
          <div className="footer__lower--company">
            &nbsp;
            <IntlMsg id="home.footer.madeWith.subTitle" />
            &nbsp;
            Stackinet LLC.
          </div>
        </div>
        <div className="payment-method payment-method--portrait payment-method--tablet">
          <img
            alt="payment-method"
            className="payment-method payment-method--portrait"
            height="35"
            sizes="(max-width: 479px) 267.390625px, 382px"
            src="images/payment-methods.png"
            srcSet="images/payment-methods.png 500w, images/payment-methods.png 765w"
            width="382"
          />
        </div>
      </div>
    </div>
  </div>
);

export default FooterLower;
