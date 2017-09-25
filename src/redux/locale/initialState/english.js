import auth from './login.english';
import navbar from './navbar.english';
import product from './product.english';
import cart from './cart.english';
import checkout from './checkout.english';
import productModal from './productModal.english';
import home from './home.english';
import formValidation from './formValidation.english';
import contactUs from './contactUs.english';
import aboutUs from './aboutUs.english';
import vapeNews from './vapeNews.english';
import userStories from './userStories.english';
import legalShippingPolicy from './legalShippingPolicy.english';
import legalReturnsPolicy from './legalReturnsPolicy.english';
import legalPrivacyPolicy from './legalPrivacyPolicy.english';
import legalTermsPolicy from './legalTermsPolicy.english';
import legalNicotineDisclaimer from './legalNicotineDisclaimer.english';

export default {
  messages: {
    ...auth,
    ...home,
    ...navbar,
    ...product,
    ...productModal,
    ...cart,
    ...checkout,
    ...formValidation,
    ...contactUs,
    ...aboutUs,
    ...vapeNews,
    ...userStories,
    ...legalTermsPolicy,
    ...legalReturnsPolicy,
    ...legalPrivacyPolicy,
    ...legalShippingPolicy,
    ...legalNicotineDisclaimer,
  },
};
