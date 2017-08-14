import React, { Component } from 'react';
import _ from 'lodash';
import Masonry from 'masonry-layout';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import Validation from 'react-validation';

import {
  apiActions,
  orderActions,
} from './redux.imports';

import {
  zipUserCart as ZipUserCart,
  determineCartType as DetermineCartType,
  checkNewUser as CheckNewUser,
  arrayDeepEquality as ArrayDeepEquality,
  composeFinalTotal as ComposeFinalTotal,
  squarePaymentForm as SqrPaymentForm,
  cleanOffTypename as CleanOffTypename,
} from './utilities.imports';
import {
  propTypes,
  defaultProps,
} from './propTypes.imports';
import {
  BreadCrumb,
  ShippingAddress,
  ShippingMethod,
  CreditCardInfo,
  ProductReview,
  GrandTotal,
  NetworkStatus,
  CvnModal,
  SubmitOrder,
  FirstName,
  LastName,
  Email,
  AddressLine,
  Country,
  PostalCode,
  PhoneNumber,
} from './component.imports';
import {
  FetchMultipleProducts,
  FetchMultipleProductsOptions,
} from '../../graphql/queries';

import {
  ValidatePostal,
  SubmitFinalOrder,
  SubmitFinalOrderOptions,
} from '../../graphql/mutations';

class ExpressCheckout extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps
  constructor(props) {
    super(props);

    this.state = {
      ccRenderKey: 'renderWithZip',
      showCvnModal: false,
      error: null,
      errors: {
        hard: false,
        soft: false,
        message: '',
      },
      // --- Form Data from Nested Components ---
      newsletterDecision: false,
      shippingFirstName: '',
      shippingLastName: '',
      shippingEmail: '',
      shippingPostalCode: '',
      shippingAddressLine1: '',
      shippingAddressLine2: '',
      shippingCountry: 'Japan',
      shippingPhoneNumber: '',
      ccNameOnCard: '',
      ccNumber: '',
      ccExpireMonth: '',
      ccExpireYear: '',
      ccCvn: '',
      ccZip: '',
      ccCountry: '',
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
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (nextProps.apiError) {
      this.form.showError('shippingPostalCode', 'postalApi');
    } else if (!_.isEqual(npCopy, tpCopy)) {
      this.setState(prevState => ({
        ...prevState,
        ...nextProps,
      }));
    }

    if (
      !ArrayDeepEquality(this.state.cart, nextProps.cart) ||
      !_.isEqual(this.state.total, nextProps.total)
    ) {
      this.setState(prevState => ({
        ...prevState,
        cart: nextProps.cart,
      }));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;

    if (!_.isEqual(nextState, this.state)) return true;

    return false;
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

  /**
  * Function: "handleOnChange"
  * 1. If the input that triggered the event is "ccCountry", then continue...  Otherwise, simply set the state of the event target name, with the event target value.
  * 2. Check to see if we've created a SquarePaymentForm twice already.  If so, the count is too high, and we need to refresh the page, to re-invoke the main <scrpt> tag from Square.
  * 3. Identify the current form type: With postal code as a required field? or not?
  * 4. If either of the values in steps 2 or 3 are truthy, refresh the page.  Otherwise...
  * 5. Check to see if the country the user chose, is a country that requires a postal code field to successfully validate and receive a card nonce.
  * // ---
  * 6.  If the country requires a postal code, then immediately check to see if there is currently an active Form.  If not, simply set the state with the new target value for the target name, and once complete, create a new form with the postal field required, and then call build once the form is finished being created.  The "build" call, is required for SPA's.
  * 7. If there is already a form created, then check to see if the form already is built with the postal field...
  * 8a. If the postal fields is already a part of the form that is cached, simply call "build" again which will reset the form, but not create a new one.
  * 8b.  If the postal field is NOT already a part of the form that is cached, then call "setState" with the new target value for the target name, and once compelete "destroy" on the cached form, then "create" for a new one, and then "build" to activate it.
  * // ---
  * 6. If the country does NOT require a postal code, then do all the above steps but with create a form (when required) without the postal code input.
  *
  * @param: {object} event - the event object.
  *
  * @return: null
  */

  handleOnChange = (e) => {
    if (e.target.name === 'ccCountry') {
      const countIsTooHigh = SqrPaymentForm.count === 2;
      const postalNotReq = SqrPaymentForm.type === 'renderWithoutZip';

      if (countIsTooHigh || postalNotReq) {
        window.location.reload();
      } else {
        const countriesWithPostal = ['United States', 'Canada', 'United Kingdom'];
        if (countriesWithPostal.includes(e.target.value)) {
          if (!!SqrPaymentForm.options) {
            if (SqrPaymentForm.type === 'renderWithZip') {
              this.setState(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
                ccRenderKey: 'renderWithZip',
              }), () => {
                SqrPaymentForm.build();
              });
            } else {
              this.setState(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
                ccRenderKey: 'renderWithZip',
              }), () => {
                SqrPaymentForm.destroy();
                SqrPaymentForm.create('renderWithZip', this.handleNonceResponse);
                SqrPaymentForm.build();
              });
            }
          } else {
            this.setState(prevState => ({
              ...prevState,
              [e.target.name]: e.target.value,
              ccRenderKey: 'renderWithZip',
            }), () => {
              SqrPaymentForm.create('renderWithZip', this.handleNonceResponse);
              SqrPaymentForm.build();
            });
          }
        } else if (!!SqrPaymentForm.options) {
          if (SqrPaymentForm.type === 'renderWithoutZip') {
            this.setState(prevState => ({
              ...prevState,
              [e.target.name]: e.target.value,
              ccRenderKey: 'renderWithoutZip',
            }), () => {
              SqrPaymentForm.build();
            });
          } else {
            this.setState(prevState => ({
              ...prevState,
              [e.target.name]: e.target.value,
              ccRenderKey: 'renderWithoutZip',
            }), () => {
              SqrPaymentForm.destroy();
              SqrPaymentForm.create('renderWithoutZip', this.handleNonceResponse);
              SqrPaymentForm.build();
            });
          }
        } else {
          this.setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
            ccRenderKey: 'renderWithoutZip',
          }), () => {
            SqrPaymentForm.create('renderWithoutZip', this.handleNonceResponse);
            SqrPaymentForm.build();
          });
        }
      }
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  toggleModal = (e) => {
    const modal = e.target.dataset.modal || e.target.parentNode.dataset.modal;
    this.setState(prevState => ({ [modal]: !prevState[modal] }));
  }

  assignRefToForm = (formComp) => { this.form = formComp; }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: this.form.validateAll() });
  }

  handleNonceResponse = (errors, nonce, cardData) => {
    if (errors) {
      this.setState(prevState => ({
        ...prevState,
        errors: {
          hard: true,
          soft: false,
          message: errors.reduce((accum, next, i) => {
            accum += `   ${i + 1}) ${next.message}.`;
            return accum;
          }, ''),
        },
      }));

    } else {
      alert('Nonce received: ' + nonce + '.\n Card Data: ' + cardData);
    }
  }

  validatePostal = () => {
    this.props.ValidatePostalRedux(this.state.shippingPostalCode)
    .then((response) => {
      const {
        data: {
          ValidatePostal: {
            _id,
            error,
            postalInfo,
          },
        },
      } = CleanOffTypename(response);

      if (!!error.hard || !!error.soft) {
        this.props.apiHasFailed(error.message);
        this.props.postalHasError({
          ...postalInfo,
          error: error.message,
        });
      } else {
        this.setState(prevState => ({
          ...prevState,
          shippingPostalCode: postalInfo.postalCode,
          shippingAddressLine1: postalInfo.jpAddress,
        }), () => {
          this.props.apiSuccess();
          this.props.postalIsValid(orderActions.receivedValidPostal({
            ...postalInfo,
            sagawaDocId: _id,
          }));
        });
      }
    })
    .catch((error) => {
      let errorMsg = '';

      if (/(ObjectID failed for value \"\" at path \"userId\")/g.test(error.message)) {
        errorMsg = 'You must login or register to complete this transaction.';
      } else if (/(GraphQL error: )/.test(error.message)) {
        errorMsg = error.message.replace(/^(GraphQL error: )/, '');
      }

      this.props.postalHasError({ error: errorMsg });
      this.props.apiHasFailed(!!errorMsg);
    });
  }

  clearValidationError = name => this.form.hideError(name)

  render() {
    const {
      userId,
      loggedIn,
      apiError,
      apiFetching,
    } = this.props;

    const {
      ccRenderKey,
      cart,
      errors,
      newsletterDecision,
      // ---
      shippingFirstName,
      shippingLastName,
      shippingEmail,
      shippingAddressLine1,
      shippingAddressLine2,
      shippingPostalCode,
      shippingPhoneNumber,
      // ---
      ccNameOnCard,
      ccNumber,
      ccExpireMonth,
      ccExpireYear,
      ccCountry,
      ccCvn,
      ccZip,
      // ---
      total,
    } = this.state;

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
          ref={this.assignRefToForm}
          onSubmit={this.handleOnSubmit}
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
              <ShippingAddress>
                <div className="input__row">
                  <FirstName
                    shippingFirstName={shippingFirstName}
                    handleOnChange={this.handleOnChange}
                  />
                  <LastName
                    shippingLastName={shippingLastName}
                    handleOnChange={this.handleOnChange}
                  />
                </div>

                <Email
                  shippingEmail={shippingEmail}
                  handleOnChange={this.handleOnChange}
                />

                <PostalCode
                  handleOnChange={this.handleOnChange}
                  validatePostal={this.validatePostal}
                  shippingPostalCode={shippingPostalCode}
                  clearValidationError={this.clearValidationError}
                />

                <AddressLine
                  disabled
                  required={false}
                  placeHolder={'Generated from Postal Code...'}
                  title={'Prefecture | City | District'}
                  shippingAddressLine={shippingAddressLine1}
                />

                <AddressLine
                  required
                  placeHolder={'RM3 1-1-8 Odakicho'}
                  title={'Room # | Street # | Street Name'}
                  shippingAddressLine={shippingAddressLine2}
                  handleOnChange={this.handleOnChange}
                />

                <Country disabled />

                <PhoneNumber
                  shippingPhoneNumber={shippingPhoneNumber}
                  handleOnChange={this.handleOnChange}
                />
              </ShippingAddress>
            </div>
            <div className="checkout__grid">
              <CreditCardInfo
                ccRenderKey={ccRenderKey}
                ccNameOnCard={ccNameOnCard}
                ccCountry={ccCountry}
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
                handleOnChange={this.handleOnChange}
              />

              <SubmitOrder enable={!!cart.length && userId} />

              <NetworkStatus
                apiError={apiError}
                errors={errors}
                loading={apiFetching}
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
}, (dispatch, ownProps) => ({
  push: location => dispatch(push(location)),
  ValidatePostalRedux: (postalCode) => {
    ownProps.apiIsFetching();
    return ownProps.ValidatePostal({
      variables: {
        postalCode,
        userId: ownProps.userId,
      },
    });
  },
}))(ExpressCheckout);

const ExpressCheckoutWithStateAndData = compose(
  graphql(ValidatePostal, { name: 'ValidatePostal' }),
  graphql(FetchMultipleProducts, {
    name: 'FetchMultipleProducts',
    options: FetchMultipleProductsOptions,
  }),
  graphql(SubmitFinalOrder, {
    name: 'SubmitFinalOrder',
    options: SubmitFinalOrderOptions,
  }),
)(ExpressCheckoutWithState);

const ExpressCheckoutWithStateAndData2 = connect(({ auth, user, orders, api }) => ({
  userId: !!user.profile && user.profile._id,
  taxRate: orders.taxRate.totalRate,
  newUser: CheckNewUser(user, auth.loggedIn),
  loggedIn: auth.loggedIn || false,
  userCart: !!auth.loggedIn && user.profile.shopping.cart,
  guestCart: orders.cart,
  apiError: !!orders.postalInfo && orders.postalInfo.error,
  apiFetching: api.fetching,
}), dispatch => ({
  apiIsFetching: () => dispatch(apiActions.fetching()),
  apiHasFailed: error => dispatch(apiActions.apiFail(error)),
  apiSuccess: () => dispatch(apiActions.apiSuccess()),
  postalHasError: postalInfo => dispatch(orderActions.receivedInvalidPostal(postalInfo)),
  postalIsValid: postalInfo => dispatch(orderActions.receivedValidPostal(postalInfo)),
}))(ExpressCheckoutWithStateAndData);

export default ExpressCheckoutWithStateAndData2;
