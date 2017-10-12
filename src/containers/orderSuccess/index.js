import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import { graphql, compose } from 'react-apollo';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage as IntlMsg } from 'react-intl';
import {
  BreadCrumb,
  OrderHeader,
  ShipTo,
  BillTo,
  OrderSummary,
} from './components';
import {
  FetchSagawa,
  FetchMultipleProducts,
} from './assets/graphql';
import {
  zipArrays as ZipArrays,
  arrayDeepEquality as ArrayDeepEquality,
} from './assets/utils';

class OrderSuccess extends React.Component {
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'checkout.success.breadCrumb.paths1': bcPaths1,
          'checkout.success.breadCrumb.paths2': bcPaths2,
          'checkout.success.breadCrumb.lastCrumb': lastCrumb,
        },
      },
    } = props;

    this.intl = {
      bcPaths1,
      bcPaths2,
      lastCrumb,
    };

    this.state = {
      loading: props.sagawaInfo.loading,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({ loading: nextProps.sagawaInfo.loading });
    }
  }

  shouldComponentUpdate(nextProps) {
    /**
    * Function: "isArrayEqual"
    * 1) Uses lodash to determine if an array of nested values are different between nextProps "np" & this.props "tp".
    *
    * @param {object} np - nextProps
    * @param {object} tp - this.props
    *
    * @return {boolean} true/false.
    */

    if (
      !_.isEqual(nextProps, this.props) ||
      !ArrayDeepEquality(nextProps.userCart, this.props.products)
    ) return true;

    // if (!_.isEqual(nextState, this.state)) return true;

    return false;
  }

  routeChange = e => this.props.push(e.target.dataset.slug)

  renderBody = (props) => {
    const {
      products: {
        FetchMultipleProducts: products,
      },
      transactionInfo: {
        _id: transactionId,
        date,
        shippingStatus,
        // comments,
        // user,
        emailAddress,
        trackingLink,
        jpyFxRate,
        total: {
          subTotal,
          taxes,
          discount,
        },
        square: {
          billingCountry,
          shippingAddress: {
            shippingPrefecture,
            shippingCity,
          },
          tender: {
            amount_money: amountMoney,
            card_details: { //eslint-disable-line
              card: {
                card_brand: cardBrand,
                last_4: last4,
                nameOnCard,
                postalCode,
              },
            },
          },
        },
      },
      sagawaInfo: {
        FetchSagawa: {
          _id: sagawaId,
          shippingAddress: {
            referenceId,
            shipdate,
            customerName,
            postal,
            jpaddress1,
            jpaddress2,
            phoneNumber,
            deliveryDate,
          },
        },
      },
    } = props;

    const zippedProducts = ZipArrays(this.props.transactionInfo.products, products, ({ qty }, dbProduct) => ({ qty, ...dbProduct }));

    return (
      <div className="ordered--main">
        <div className="ordered--container">
          <BreadCrumb
            paths={[this.intl.bcPaths1, this.intl.bcPaths2]}
            classes={['home', 'home']}
            destination={['', 'express_checkout']}
            lastCrumb={this.intl.lastCrumb}
          />
          <div className="ordered__title">
            <div className="title--icon">
              <FontAwesome name="check-circle" />
            </div>
            <div className="title--msg">
              <h1><IntlMsg id="checkout.success.title" /></h1>
              <h4><IntlMsg id="checkout.success.sub-title" /></h4>
              <h4>{emailAddress}</h4>
            </div>
          </div>

          <OrderHeader
            date={date}
            status={shippingStatus[IntlLocale]}
            invoiceId={sagawaId}
            trackingId={referenceId}
            orderId={transactionId}
            paidTotal={amountMoney}
            deliveryDate={deliveryDate}
          />
          <div className="ordered__addresses">
            <ShipTo
              fullName={customerName}
              jpAddress1={jpaddress1}
              jpAddress2={jpaddress2}
              city={shippingCity}
              prefecture={shippingPrefecture}
              postalCode={postal}
              country={'Japan'}
              phoneNumber={phoneNumber}
            />
            <BillTo
              nameOnCard={nameOnCard}
              billingPostalCode={postalCode}
              billingCountry={billingCountry}
              ccLastFour={last4}
              cardBrand={cardBrand}
            />
          </div>
          <OrderSummary
            shippingStatus={`Shipping on ${shipdate}`}
            trackingLink={trackingLink}
            trackingNumber={referenceId}
            orderProducts={zippedProducts}
            grandTotal={amountMoney.amount}
            currency={amountMoney.currency}
            subTotal={subTotal}
            taxes={taxes}
            discount={discount}
            jpyFxRate={jpyFxRate}
          />
          <div className="ordered__action-btns">
            <button
              className="back-to-home sweep-right primary-flex-button"
              data-slug="/"
              onClick={this.routeChange}
            >
              <span className="flex-btn-parent">
                <FontAwesome name="angle-double-left" />&nbsp;
                <IntlMsg id="checkout.success.actions.back-to-home" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ordered--main">
        <div className="ordered__header">
          {
            this.state.loading ?
              <div className="loading-content">
                <h1 className="main__loading">
                  <FontAwesome name="spinner" pulse size="2x" />
                </h1>
                <br />
                <h2>
                  <IntlMsg id="checkout.success.subtitle.loading" />
                </h2>
              </div>
            :
            this.renderBody(this.props)
          }
        </div>
      </div>
    );
  }
}

const OrderSuccessWithIntl = injectIntl(OrderSuccess);

const OrderSuccessWithState = compose(
  graphql(FetchSagawa, {
    name: 'sagawaInfo',
    options: ({ transactionInfo }) => ({
      variables: { id: transactionInfo.sagawa },
    }),
  }),
  graphql(FetchMultipleProducts, {
    name: 'products',
    options: ({ transactionInfo }) => {
      const productIds = transactionInfo.products.map(({ _id }) => _id);
      return ({
        variables: { ids: productIds },
      });
    },
  }),
)(OrderSuccessWithIntl);

const OrderSuccessWithStateAndData = connect(({ checkout }) => ({
  transactionInfo: checkout.transaction || {
    products: [{ _id: '' }],
    sagawa: '',
  },
}), dispatch => ({
  push: location => dispatch(push(location)),
}))(OrderSuccessWithState);

const { func, shape, string, bool, number, arrayOf, objectOf, any } = PropTypes;

OrderSuccess.propTypes = {
  intl: intlShape.isRequired,
  push: func.isRequired,
  products: objectOf(any),
  transactionInfo: shape({
    _id: string,
    date: string,
    comments: string,
    termsAgreement: bool,
    user: string,
    emailAddress: string,
    trackingLink: string,
    jpyFxRate: string,
    shippingStatus: string,
    total: shape({
      subTotal: string,
      taxes: string,
      grandTotal: string,
      discount: shape({
        qty: bool,
        qtyAmount: string,
        register: bool,
        registerAmount: string,
      }),
    }),
    square: shape({
      idempotency_key: string,
      billingCountry: string,
      shippingAddress: shape({
        shippingPrefecture: string,
        shippingCity: string,
      }),
      tender: shape({
        id: string,
        location_id: string,
        transaction_id: string,
        created_at: string,
        note: string,
        amount_money: shape({
          amount: number,
          currency: string,
        }),
        type: string,
        card_details: shape({
          card: shape({
            card_brand: string,
            last_4: string,
            nameOnCard: string,
            cardNonce: string,
            postalCode: string,
          }),
          entry_method: string,
        }),
      }),
      refund: {
        id: string,
        location_id: string,
        transaction_id: string,
        tender_id: string,
        created_at: string,
        reason: string,
        amount_money: {
          amount: number,
          currency: string,
        },
        status: string,
      },
    }),
  }),
  sagawaInfo: shape({
    _id: string,
    userId: string,
    transactionId: string,
    uploadForm: string,
    shippingAddress: shape({
      referenceId: string,
      shipdate: string,
      customerName: string,
      postal: string,
      jpaddress1: string,
      jpaddress2: string,
      phoneNumber: string,
      deliveryDate: string,
    }),
    items: arrayOf(
      shape({
        productId: string,
        itemcd: string,
        itemname: string,
        piece: number,
        unitprice: number,
      }),
    ),
  }),
};
OrderSuccess.defaultProps = {
  products: [],
  sagawaInfo: {},
  transactionInfo: {
    products: [{
      _id: '',
    }],
    sagawa: '',
  },
};
export default OrderSuccessWithStateAndData;
