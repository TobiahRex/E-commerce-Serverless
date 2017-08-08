import React, { Component } from 'react';
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
  composeFinalTotal as ComposeFinalTotal,
} from './utilities.imports';
import {
  propTypes,
  defaultProps,
} from './propTypes.imports';
import {
  BreadCrumb,
  BillingAddress,
  ShippingAddress,
  ShippingMethod,
  CreditCardInfo,
  ProductReview,
  GrandTotal,
  NetworkStatus,
  CvnModal,
  SubmitOrder,
} from './component.imports';
import {
  FetchMultipleProducts,
  FetchMultipleProductsOptions,
} from '../../graphql/queries';
import {
  SubmitFinalOrder,
  SubmitFinalOrderOptions,
} from '../../graphql/mutations';

class ExpressCheckout extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  constructor(props) {
    super(props);

    this.state = {
      showCvnModal: false,
      errors: {
        hard: false,
        soft: false,
        message: '',
      },
      // --- Form Data from Nested Components ---
      newsletterDecision: true,
      // billingFirstName: '',
      // billingLastName: '',
      // billingEmail: '',
      // billingAddressLine1: '',
      // billingAddressLine2: '',
      // billingCountry: '',
      // billingPrefectureState: '',
      // billingCity: '',
      // billingPostalCode: '',
      shippingFirstName: '',
      shippingLastName: '',
      shippingEmail: '',
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
      ccZip: '',
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
    if (
      !_.isEqual(nextProps, this.props) ||
      !ArrayDeepEquality(nextProps.cart, this.state.cart)
    ) {
      this.setState({ ...nextProps });
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
      // SubmitFinalOrder,
    } = this.props;

    const {
      cart,
      errors,
      newsletterDecision,
      // ---
      // billingFirstName,
      // billingLastName,
      // billingEmail,
      // billingAddressLine1,
      // billingAddressLine2,
      // billingCountry,
      // billingPrefectureState,
      // billingCity,
      // billingPostalCode,
      // ---
      shippingFirstName,
      shippingLastName,
      shippingEmail,
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
      ccZip,
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
              {/* <BillingAddress
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
              /> */}
              <ShippingAddress
                shippingFirstName={shippingFirstName}
                shippingLastName={shippingLastName}
                shippingEmail={shippingEmail}
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
                ccZip={ccZip}
                handleOnChange={this.handleOnChange}
                toggleModal={this.toggleModal}
              />
              <GrandTotal
                total={total}
                showTotal={!!cart.length}
                termsAgreement={termsAgreement}
                handleOnChange={this.handleOnChange}
              />

              <SubmitOrder enable={!!cart.length} />

              <NetworkStatus
                errors={errors}
                loading={false}
                success={false}
                routerPush={this.routerPush}
              />

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

const ExpressCheckoutWithState = connect((state, ownProps) => {
  const total = ComposeFinalTotal(ownProps);
  const cart = DetermineCartType(ownProps, ZipUserCart);

  return ({
    total,
    cart,
  });
}, dispatch => ({
  push: location => dispatch(push(location)),
}))(ExpressCheckout);

const ExpressCheckoutWithStateAndData = compose(
  graphql(FetchMultipleProducts, {
    name: 'FetchMultipleProducts',
    options: FetchMultipleProductsOptions,
  }),
  graphql(SubmitFinalOrder, {
    name: 'SubmitFinalOrder',
    options: SubmitFinalOrderOptions,
  }),
)(ExpressCheckoutWithState);

const ExpressCheckoutWithStateAndData2 = connect(({ auth, user, orders }) => ({
  loggedIn: auth.loggedIn || false,
  newUser: CheckNewUser(user, auth.loggedIn),
  userCart: auth.loggedIn ? user.profile.shopping.cart : [],
  guestCart: orders.cart,
  taxRate: orders.taxRate.totalRate,
}))(ExpressCheckoutWithStateAndData);

export default ExpressCheckoutWithStateAndData2;
