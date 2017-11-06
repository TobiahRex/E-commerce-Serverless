import auth from './login';
import navbar from './navbar';
import product from './product';
import cart from './cart';
import checkout from './checkout';
import productModal from './productModal';
import home from './home';
import formValidation from './formValidation';
import contactUs from './contactUs';
import aboutUs from './aboutUs';
import vapeNews from './vapeNews';
import userStories from './userStories';
import legalShippingPolicy from './legalShippingPolicy';
import legalReturnsPolicy from './legalReturnsPolicy';
import legalPrivacyPolicy from './legalPrivacyPolicy';
import legalTermsPolicy from './legalTermsPolicy';
import legalNicotineDisclaimer from './legalNicotineDisclaimer';
import notFound from './notFound';

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
    ...notFound,
  },
};
