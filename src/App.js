import React, { PropTypes, Component } from 'react';
import MobileDetect from 'mobile-detect';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Match } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import routes from './Navigation/main';

import AgeVerification from './Pages/AgeVerification/ageVerification';
import NavbarWeb from './Pages/Navbar/navbarComponents/navbar_web/navbar_web';
import NavbarMobile from './Pages/Navbar/navbarComponents/navbar_mobile/navbar_mobile';
import Footer from './Pages/Footer/footer';
import sessionActions from './Redux/SessionRedux';
import userActions from './Redux/UserRedux';

import { genDynamicTitle } from './Services/asynchDispatchServices';
/* NOTE:
1. Remove UUID hard code.

*/
// // ----------------------------- Other ------------------------------
// import NotFound from './Pages/404/notFound404';
// // ----------------------------- Media ------------------------------
// import About from './Pages/Legal/about';
// import ContactUs from './Pages/Legal/contactUs';
// import Phone from './Pages/Legal/phone';
// import Reviews from './Pages/Media/reviews';
// import UserStories from './Pages/Media/userStories';
// import VapeNews from './Pages/Media/vapeNews';
// import Faqs from './Pages/Legal/faqs';
// import MissionStatement from './Pages/Legal/missionStatement';
// import SocialMedia from './Pages/Legal/socialMedia';
// import Wholesale from './Pages/Legal/wholesale';
// import Affiliates from './Pages/Legal/affiliateProgram';
//
// // ----------------------------- Legal ------------------------------
// import NicotineDisclaimer from './Pages/Legal/nicotineDisclaimer';
// import Shipping from './Pages/Legal/shippingPolicy';
// import Returns from './Pages/Legal/returnsPolicy';
// import PrivacyPolicy from './Pages/Legal/privacyPolicy';
// import TermsConditions from './Pages/Legal/termsConditions';
//
// // ----------------------------- Auth -------------------------------
// import ResetPasswordEmail from './Pages/Auth/ResetEmail/reset';
// import Login from './Pages/Auth/Login/login';
// import Register from './Pages/Auth/Register/register';
// import Forgot from './Pages/Auth/Forgot/forgot';
//
// // ----------------------------- Shopping ---------------------------
//
// import Homepage from './Pages/Home/homePage';
// import SingleProduct from './Pages/Products/productComponents/products_singleProduct';
// import AllProducts from './Pages/Products/productComponents/products_allProducts';
//
// // ----------------------------- Checkout ---------------------------
// import Cart from './Pages/Cart/cart';
// import EmptyCart from './Pages/Cart/EmptyCart/emptyCart';
// import ExpressCheckout from './Pages/ExpressCheckout/expressCheckout';
// import OrderSuccess from './Pages/ExpressCheckout/orderSuccess';
//
// // --------------------------- Dashboards ---------------------------
// // --------------------------- User
// import UserDashboard from './Pages/UserDashboard/userDashComponents/userDashboard';
// import UserHomeDash from './Pages/UserDashboard/userDashComponents/userDashboard_home/userHomeDash';
// import UserAddressBook from './Pages/UserDashboard/userDashComponents/userDashboard_addressBook/userAddressBook';
// import UserManageLogin from './Pages/UserDashboard/userDashComponents/userDashboard_manageLogin/userManageLogin';
// import UserNewsLetter from './Pages/UserDashboard/userDashComponents/userDashboard_newsletter/userNewsLetter';
// import UserProductReviews from './Pages/UserDashboard/userDashComponents/userDashboard_productReviews/userProductReviews';
// import UserLoginApp from './Pages/UserDashboard/userDashComponents/userDashboard_loginApp/userLoginApp';
// import UserOrders from './Pages/UserDashboard/userDashComponents/userDashboard_orders/userOrders';
// import UserOrderTracking from './Pages/UserDashboard/userDashComponents/userDashboard_orders/userOrderTracking';
// import UserLegal from './Pages/UserDashboard/userDashComponents/userDashboard_legal/userLegal';
//
// // --------------------------- Admin
// import AdminDashboard from './Pages/AdminDashboard/adminDashboard';


// ------------------------------------------------------------------

class App extends Component {
  static styles = {
    hide: {
      display: 'none',
    },
    show: {
      display: 'flex',
    },
  }
  static defaultProps = {
    ageVerified: false,
  }
  static propTypes = {
    // children: PropTypes.objectOf(PropTypes.any.isRequired),
    ageVerified: PropTypes.bool,
    verifyAge: PropTypes.func.isRequired,
    saveActivePage: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      ageVerified: props.ageVerified,
    };
  }

  componentWillReceiveProps({ ageVerified }) {
    if (this.state.ageVerified !== ageVerified) {
      this.setState({ ageVerified });
    }
  }

  saveActivePage = () => {
    const { title, url } = genDynamicTitle();
    this.props.saveActivePage(title, url);
  }

  verifyAge = (event) => {
    const history = createHistory();
    event.preventDefault();
    this.props.verifyAge();
    history.push('/home');
  };

  catchMobileType = () => {
    const mobileDevice = new MobileDetect(window.navigator.userAgent);
    return mobileDevice.mobile();
  }

  render() {
    const { ageVerified } = this.state;
    const { hide, show } = App.styles;
    const avStyle = ageVerified ? hide : show;
    let sectionStyle;
    if (!this.catchMobileType()) {
      sectionStyle = {
        paddingTop: 100,
        minHeight: 510,
      };
    }
    return (
      <div id="yo">
        <AgeVerification
          avStyle={avStyle}
          verifyAge={this.verifyAge}
        />
        <header className="navbar-comp-container">
          <NavbarWeb />
          <NavbarMobile />
        </header>
        <section id="main-section" style={{ ...sectionStyle }}>
          {routes}
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ user, session, mobile }) => ({
  activePage: session.currentActivePage,
  ageVerified: user.ageVerified,
  mobileActive: mobile.mobileTypes,
});
const mapDispatchToProps = dispatch => ({
  saveActivePage: (title, currentPath) =>
  dispatch(sessionActions.saveActivePage(title, currentPath)),
  verifyAge: () => dispatch(userActions.ageVerified()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
