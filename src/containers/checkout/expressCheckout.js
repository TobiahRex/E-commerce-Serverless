import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Masonry from 'masonry-layout';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import Validation from 'react-validation';

import {
  zipUserCart as ZipUserCart,
  determineCartType as DetermineCartType,
  checkNewUser as CheckNewUser,
} from './utilities.imports';
import { FetchMultipleProducts } from '../../graphql/queries';

import {
  BreadCrumb,
  BillingAddress,
  ShippingAddress,
  ShippingMethod,
  CreditCardInfo,
  ProductReview,
  GrandTotal,
  ErrorDialogue,
  CvnModal,
  SubmitOrder,
} from './component.imports';

const { arrayOf, object, func, bool } = PropTypes;

class ExpressCheckout extends Component {
  static propTypes = {
    cart: arrayOf(object),
    push: func.isRequired,
    loggedIn: bool.isRequired,
  }
  static defaultProps = {
    cart: [],
  }
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      newsletterDecision: true,
      showCvnModal: false,
      errors: {},
      // --- Billing Address State ---
      billingFirstName: '',
      billingLastName: '',
      billingEmail: '',
      billingAddressLine1: '',
      billingAddressLine2: '',
      billingCountry: '',
      billingPrefectureState: '',
      billingCity: '',
      billingPostalCode: '',
      // --- Shipping Address ---
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddressLine1: '',
      shippingAddressLine2: '',
      shippingCountry: 'Japan',
      shippingPrefecture: '',
      shippingCity: '',
      shippingPostalCode: '',
      shippingPhoneNumber: '',
      // --- Credit Card Info ---
      ccNameOnCard: '',
      ccNumber: '',
      ccExpireMonth: '',
      ccExpireYear: '',
      ccCvn: '',
      // --- Terms Agreement ---
      termsAgreement: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) this.setState({ ...nextProps });
  }

  componentWillUpdate() {
    const msnry = new Masonry('.grid', { // eslint-disable-line
      itemSelector: '.checkout__grid',
      columnWidth: 340,
      gutter: 22,
    });
  }

  routerPush = (e) => {
    this.props.push(e.target.dataset.slug || e.target.parentNode.dataset.slug);
  }

  handleNewsletterChange = () => this.setState(prevState => ({ newsletterDecision: !prevState.newsletterDecision }))

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

  toggleModal = (e) => {
    const modal = e.target.dataset.modal || e.target.parentNode.dataset.modal;

    this.setState(prevState =>
      ({ [modal]: !prevState[modal] }),
    );
  }

  assignRefToForm = (formComp) => { this.form = formComp; }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('%ce', 'background:blue;', e);

    this.setState({ error: this.form.validateAll() });
  }

  render() {
    const {
      cart,
      loggedIn,
    } = this.props;

    const {
      newsletterDecision,
      // ---
      billingFirstName,
      billingLastName,
      billingEmail,
      billingAddressLine1,
      billingAddressLine2,
      billingCountry,
      billingPrefectureState,
      billingCity,
      billingPostalCode,
      // ---
      shippingFirstName,
      shippingLastName,
      shippingAddressLine1,
      shippingAddressLine2,
      shippingCountry,
      shippingPrefecture,
      shippingCity,
      shippingPostalCode,
      shippingPhoneNumber,
      // ---
      ccNameOnCard,
      ccNumber,
      ccExpireMonth,
      ccExpireYear,
      ccCvn,
      // ---
      termsAgreement,
      // ---
      total,
    } = this.state;

    console.log('%cthis.state', 'background:cyan;', this.state);

    return (
      <div className="checkout__container">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="Express Checkout"
        />
        <div className="checkout__title">
          <h1>Express Checkout</h1>
        </div>
        <Validation.components.Form
          ref={this.assignRefToForm} onSubmit={this.handleOnSubmit}
        >
          <div className="checkout__body grid">
            <div className="checkout__grid">
              <ProductReview
                cart={cart}
                loggedIn={loggedIn}
                routerPush={this.routerPush}
                newsletterDecision={newsletterDecision}
                handleNewsletterChange={this.handleNewsletterChange}
              />
              <ShippingMethod />
            </div>
            <div className="checkout__grid">
              <BillingAddress
                billingFirstName={billingFirstName}
                billingLastName={billingLastName}
                billingEmail={billingEmail}
                billingAddressLine1={billingAddressLine1}
                billingAddressLine2={billingAddressLine2}
                billingCountry={billingCountry}
                billingPrefectureState={billingPrefectureState}
                billingCity={billingCity}
                billingPostalCode={billingPostalCode}
                handleOnChange={this.handleOnChange}
              />
              <ShippingAddress
                shippingFirstName={shippingFirstName}
                shippingLastName={shippingLastName}
                shippingAddressLine1={shippingAddressLine1}
                shippingAddressLine2={shippingAddressLine2}
                shippingCountry={shippingCountry}
                shippingPrefecture={shippingPrefecture}
                shippingCity={shippingCity}
                shippingPostalCode={shippingPostalCode}
                shippingPhoneNumber={shippingPhoneNumber}
                handleOnChange={this.handleOnChange}
              />
            </div>
            <div className="checkout__grid">
              <CreditCardInfo
                ccNameOnCard={ccNameOnCard}
                ccNumber={ccNumber}
                ccExpireMonth={ccExpireMonth}
                ccExpireYear={ccExpireYear}
                ccCvn={ccCvn}
                handleOnChange={this.handleOnChange}
                toggleModal={this.toggleModal}
              />
              <GrandTotal
                total={total}
                termsAgreement={termsAgreement}
                handleOnChange={this.handleOnChange}
              />

              <SubmitOrder />

              <ErrorDialogue />

            </div>
          </div>
        </Validation.components.Form>

        <CvnModal
          showModal={this.state.showCvnModal}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

const ExpressCheckoutWithState = connect(({
  auth,
  user,
  orders,
}, ownProps) => {
  const userCart = auth.loggedIn ? user.profile.shopping.cart : [];
  return ({
    cart: DetermineCartType(
      auth.loggedIn,
      orders.cart,
      userCart,
      ownProps.FetchMultipleProducts,
      ZipUserCart,
    ),
  });
}, dispatch => ({
  push: location => dispatch(push(location)),
}))(ExpressCheckout);

const ExpressCheckoutWithStateAndData = compose(
  graphql(FetchMultipleProducts, {
    name: 'FetchMultipleProducts',
    options: ({ loggedIn, userCart }) => {
      if (!loggedIn) return ({ variables: { ids: [] } });

      let ids = [];

      if (!!userCart.length) ids = userCart.map(({ productId }) => productId);

      return ({
        variables: { ids },
      });
    },
  }),
)(ExpressCheckoutWithState);

const ExpressCheckoutWithStateAndData2 = connect(({ auth, user }) => ({
  loggedIn: auth.loggedIn || false,
  userCart: auth.loggedIn ? user.profile.shopping.cart : [],
  newUser: CheckNewUser(user, auth.loggedIn),
}), null)(ExpressCheckoutWithStateAndData);

export default ExpressCheckoutWithStateAndData2;
