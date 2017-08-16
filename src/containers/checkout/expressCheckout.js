import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import Masonry from 'masonry-layout';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import Validation from 'react-validation';

import {
  apiActions,
  orderActions,
  toasterActions,
} from './redux.imports';

import {
  zipUserCart as ZipUserCart,
  determineCartType as DetermineCartType,
  checkNewUser as CheckNewUser,
  arrayDeepEquality as ArrayDeepEquality,
  composeFinalTotal as ComposeFinalTotal,
  squarePaymentForm as SqrPaymentForm,
  cleanOffTypename as CleanOffTypename,
  checkForToast as CheckForToast,
  generateFinalForm as GenerateFinalForm,
} from './utilities.imports';
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
  Prefecture,
  City,
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
} from '../../graphql/mutations';

class ExpressCheckout extends React.Component {
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
      prComments: '',
      newsletterDecision: false,
      shippingFirstName: '',
      shippingLastName: '',
      shippingEmail: '',
      shippingPostalCode: '',
      shippingAddressLine1: '',
      shippingAddressLine2: '',
      shippingCountry: 'Japan - JP',
      shippingPrefecture: '',
      shippingCity: '',
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

    if (!!nextProps.postalError) {
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

  handleNonceResponse = (errors, cardNonce, cardData) => {
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
      const formData = GenerateFinalForm({
        state: this.state,
        props: this.props,
        cardData: {
          ...cardData,
          cardNonce,
        },
      });

      this.props.GraphQLsubmitOrder(formData)
      .then((response) => {
        const cleanResponse = CleanOffTypename(response);
        console.log('%ccleanResponse', 'background:lime;', cleanResponse);
      })
      .catch(this.props.GraphQLhandleError);
    }
  }

  validatePostal = () => {
    this.props.GraphQLvalidatePostal(this.state.shippingPostalCode)
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
        this.props.apiFail();
        this.props.gotInvalidPostal({ error: true });
        this.props.toastError(true, error.message);
      } else {
        this.setState(prevState => ({
          ...prevState,
          shippingPostalCode: postalInfo.postalCode,
          shippingAddressLine1: postalInfo.jpAddress,
        }), () => {
          this.props.apiSuccess();
          this.props.clearToaster();
          this.props.gotValidPostal({
            ...postalInfo,
            sagawaId: _id,
          });
        });
      }
    })
    .catch(this.props.GraphQLhandleError);
  }

  clearValidationError = name => this.form.hideError(name)

  render() {
    const {
      userId,
      loggedIn,
      toast,
      apiFetching,
    } = this.props;

    const {
      ccRenderKey,
      cart,
      errors,
      prComments,
      newsletterDecision,
      // ---
      shippingFirstName,
      shippingLastName,
      shippingEmail,
      shippingAddressLine1,
      shippingAddressLine2,
      shippingPostalCode,
      shippingPrefecture,
      shippingCity,
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
      termsAgreement,
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
                comments={prComments}
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
                  line={1}
                  type="shipping"
                  title={'Kanji Address'}
                  disabled
                  required={false}
                  placeHolder={'Generated from Postal Code...'}
                  addressLine={shippingAddressLine1}
                />

                <AddressLine
                  required
                  type="shipping"
                  line={2}
                  placeHolder={'RM3 1-1-8 Odakicho'}
                  title={'Room # | Street # | Street Name'}
                  addressLine={shippingAddressLine2}
                  handleOnChange={this.handleOnChange}
                />

                <Country disabled />

                <Prefecture
                  type="shipping"
                  prefecture={shippingPrefecture}
                  handleOnChange={this.handleOnChange}
                />

                <City
                  type="shipping"
                  city={shippingCity}
                  handleOnChange={this.handleOnChange}
                />

                <PhoneNumber
                  type="shipping"
                  phoneNumber={shippingPhoneNumber}
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
                termsAgreement={termsAgreement}
                handleOnChange={this.handleOnChange}
              />

              <SubmitOrder
                enable={(cart.length && userId) ? true : false} //eslint-disable-line
              />

              <NetworkStatus
                toast={toast}
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
  GraphQLhandleError: (error) => {
    let errorMsg = '';

    if (/(ObjectID failed for value \"\" at path \"userId\")/g.test(error.message)) {
      errorMsg = 'You must login or register to complete this transaction.';
    } else if (/(GraphQL error: )/.test(error.message)) {
      errorMsg = error.message.replace(/(GraphQL error: )+/g, '');
    }

    ownProps.toastError(true, errorMsg || error.message);
    ownProps.apiFail();
  },
  GraphQLvalidatePostal: (postalCode) => {
    ownProps.apiIsFetching();
    return ownProps.ValidatePostal({
      variables: {
        postalCode,
        userId: ownProps.userId,
      },
    });
  },
  GraphQLsubmitOrder: (formData) => {
    ownProps.apiIsFetching();
    return ownProps.SubmitFinalOrder({
      variables: { ...formData },
    });
  },
}))(ExpressCheckout);

const ExpressCheckoutWithStateAndData = compose(
  graphql(ValidatePostal, { name: 'ValidatePostal' }),
  graphql(FetchMultipleProducts, {
    name: 'FetchMultipleProducts',
    options: FetchMultipleProductsOptions,
  }),
  graphql(SubmitFinalOrder, { name: 'SubmitFinalOrder' }),
)(ExpressCheckoutWithState);

const ExpressCheckoutWithStateAndData2 = connect(({ auth, user, orders, api, toaster }) => ({
  toast: CheckForToast(toaster),
  userId: !!user.profile ? user.profile._id : '',
  sagawaId: orders.postalInfo.sagawaId,
  taxRate: orders.taxRate,
  newUser: CheckNewUser(user, auth.loggedIn),
  loggedIn: auth.loggedIn || false,
  userCart: !!auth.loggedIn ? user.profile.shopping.cart : [],
  guestCart: orders.cart,
  apiFetching: api.fetching,
  postalError: orders.postalInfo.error,
}), dispatch => ({
  toastError: (toast, msg) => dispatch(toasterActions.toastError(toast, msg)),
  toastSuccess: (toast, msg) => dispatch(toasterActions.toastSuccess(toast, msg)),
  toastWarning: (toast, msg) => dispatch(toasterActions.toastWarning(toast, msg)),
  clearToaster: () => dispatch(toasterActions.clearToaster()),
  //
  apiIsFetching: () => dispatch(apiActions.fetching()),
  apiFail: () => dispatch(apiActions.apiFail()),
  apiSuccess: () => dispatch(apiActions.apiSuccess()),
  //
  gotInvalidPostal: postalInfo => dispatch(orderActions.gotInvalidPostal(postalInfo)),
  gotValidPostal: postalInfo => dispatch(orderActions.gotValidPostal(postalInfo)),
}))(ExpressCheckoutWithStateAndData);

const {
  func,
  bool,
  any,
  shape,
  object,
  string,
  number,
  arrayOf,
  objectOf,
} = PropTypes;

ExpressCheckout.propTypes = {
  push: func.isRequired,
  // ---
  gotValidPostal: func.isRequired,
  gotInvalidPostal: func.isRequired,
  postalError: bool.isRequired,
  sagwaId: string,
  // ---
  toast: shape({
    type: string,
    message: string,
  }).isRequired,
  toastError: func.isRequired,
  toastWarning: func.isRequired,
  toastSuccess: func.isRequired,
  clearToaster: func.isRequired,
  // ---
  apiFail: func.isRequired,
  apiSuccess: func.isRequired,
  apiFetching: bool,
  apiIsFetching: func.isRequired,
  // ---
  cart: arrayOf(object),
  userCart: arrayOf(object),
  guestCart: arrayOf(object),
  // ---
  userId: string.isRequired,
  loggedIn: bool.isRequired,
  newUser: bool.isRequired,
  // ---
  taxRate: shape({
    stateRate: number,
    cityRate: number,
    totalRate: number,
  }).isRequired,
  total: shape({
    discount: {
      qty: bool,
      qtyAmount: number,
      register: bool,
      registerAmount: number,
    },
    taxes: number,
    grandTotal: number,
    subTotal: number,
  }),
  // ---
  SubmitFinalOrder: func.isRequired,
  FetchMultipleProducts: objectOf(any).isRequired,
  GraphQLhandleError: func.isRequired,
  GraphQLvalidatePostal: func.isRequired,
  GraphQLsubmitOrder: func.isRequired,
};
ExpressCheckout.defaultProps = {
  cart: [],
  userCart: [],
  guestCart: [],
  total: {
    discount: {
      qty: false,
      qtyAmount: 0,
      register: false,
      registerAmount: 0,
    },
    taxes: 0,
    grandTotal: 0,
    subTotal: 0,
  },
  sagwaId: '',
  apiFetching: false,
  SubmitFinalOrder: func,
};

export default ExpressCheckoutWithStateAndData2;
