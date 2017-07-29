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
  arrayDeepEquality as ArrayDeepEquality,
  calculateTotalsDue as CalculateTotalsDue,
  calculateDiscounts as CalculateDiscounts,
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

const { arrayOf, object, func, number, bool, objectOf, any } = PropTypes;

class ExpressCheckout extends Component {
  static propTypes = {
    push: func.isRequired,
    loggedIn: bool.isRequired,
    FetchMultipleProducts: objectOf(any).isRequired,
    newUser: bool.isRequired,
    userCart: arrayOf(object),
    guestCart: arrayOf(object),
    taxRate: number.isRequired,
  }
  static defaultProps = {
    userCart: [],
    guestCart: [],
  }
  constructor(props) {
    super(props);

    this.state = {
      showCvnModal: false,
      errors: {},
      // --- Form Data from Nested Components ---
      newsletterDecision: true,
      billingFirstName: '',
      billingLastName: '',
      billingEmail: '',
      billingAddressLine1: '',
      billingAddressLine2: '',
      billingCountry: '',
      billingPrefectureState: '',
      billingCity: '',
      billingPostalCode: '',
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddressLine1: '',
      shippingAddressLine2: '',
      shippingCountry: 'Japan',
      shippingPrefecture: '',
      shippingCity: '',
      shippingPostalCode: '',
      shippingPhoneNumber: '',
      ccNameOnCard: '',
      ccNumber: '',
      ccExpireMonth: '',
      ccExpireYear: '',
      ccCvn: '',
      termsAgreement: false,
      // --- From props ---
      cart: [],
      total: {
        discount: {
          qty: false,
          qtyAmount: 0,
          register: false,
          registerAmount: 0,
        },
        subTotal: 0,
        grandTotal: 0,
        taxes: 0,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      loggedIn,
      newUser,
      userCart,
      guestCart,
      taxRate,
      FetchMultipleProducts: fetchCartProductsResult,
    } = nextProps;

    const updatedCart = this.determineCartType(
      loggedIn,
      guestCart,
      userCart,
      fetchCartProductsResult,
      ZipUserCart,
    );

    const {
      taxes,
      grandTotal: total,
    } = CalculateTotalsDue(updatedCart, taxRate);

    const {
      discount,
      subTotal,
      grandTotal,
    } = CalculateDiscounts(updatedCart, taxes, total, newUser);

    const objectToCheck = {
      total: {
        discount: {
          qty: discount.qty,
          qtyAmount: discount.qtyAmount,
          register: discount.register,
          registerAmount: discount.registerAmount,
        },
        subTotal,
        grandTotal,
        taxes,
      },
    };

    if (
      !_.isEqual(objectToCheck, this.state) ||
      !_.isEqual(nextProps, this.props) ||
      ArrayDeepEquality(updatedCart, this.state.cart)
    ) {
      this.setState({
        ...nextProps,
        cart: updatedCart,
      });
    }
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
    this.setState({ error: this.form.validateAll() });
  }

  render() {
    const {
      loggedIn,
    } = this.props;

    const {
      cart,
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
                handleOnChange={this.handleOnChange}
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

const ExpressCheckoutWithStateAndData2 = connect(({ auth, user, orders }) => ({
  loggedIn: auth.loggedIn || false,
  newUser: CheckNewUser(user, auth.loggedIn),
  userCart: auth.loggedIn ? user.profile.shopping.cart : [],
  guestCart: orders.cart,
  taxRate: orders.taxRate.totalRate,
}), null)(ExpressCheckoutWithStateAndData);

export default ExpressCheckoutWithStateAndData2;
