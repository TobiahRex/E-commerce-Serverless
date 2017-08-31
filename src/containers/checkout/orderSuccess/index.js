import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import { graphql, compose } from 'react-apollo';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
  OrderHeader,
  ShipTo,
  BillTo,
  OrderSummary,
} from './components';

import {
  FetchSagawa,
  FetchMultipleProducts,
} from '../../../graphql/queries';

import {
  arrayDeepEquality as ArrayDeepEquality,
  zipArrays as ZipArrays,
} from '../utilities.imports';

class OrderSuccess extends React.Component {
  constructor(props) {
    super(props);

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
        // termsAgreement,
        // user,
        emailAddress,
        // invoiceEmailNoTracking,
        jpyFxRate,
        total: {
          subTotal,
          taxes,
          // grandTotal,
          discount,
        },
        square: {
          // idempotency_key,
          billingCountry,
          shippingAddress: {
            shippingPrefecture,
            shippingCity,
          },
          tender: {
            // id,
            // location_id,
            // transaction_id,
            // created_at,
            // note,
            amount_money: amountMoney,
            // type,
            card_details: { //eslint-disable-line
              card: {
                // card_brand,
                last_4: last4,
                nameOnCard,
                // cardNonce,
                postalCode,
              },
              // entry_method,
            },
          },
        },
      },
      sagawaInfo: {
        FetchSagawa: {
          _id: sagawaId,
          // userId,
          // transactionId,
          // uploadForm,
          shippingAddress: {
            referenceId,
            shipdate,
            customerName,
            postal,
            jpaddress1,
            jpaddress2,
            phoneNumber,
            // deliveryDate,
          },
          // items,
        },
      },
    } = props;

    const zippedProducts = ZipArrays(this.props.transactionInfo.products, products, ({ qty }, dbProduct) => ({ qty, ...dbProduct }));

    return (
      <div className="ordered--main">
        <div className="ordered--container">
          <div className="ordered__title">
            <div className="title--icon">
              <FontAwesome name="check-circle" />
            </div>
            <div className="title--msg">
              <h1>Your order has been successfully placed!</h1>
              <h4>The invoice shown below has been sent to your email:</h4>
              <h4>{emailAddress}</h4>
            </div>
          </div>

          <OrderHeader
            date={date}
            status={shippingStatus}
            invoiceId={sagawaId}
            trackingId={referenceId}
            orderId={transactionId}
            paidTotal={amountMoney}
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
            />
          </div>
          <OrderSummary
            shippingStatus={`Shipping on ${shipdate}`}
            trackingId={referenceId}
            orderProducts={zippedProducts}
            grandTotal={amountMoney.amount}
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
                <FontAwesome name="angle-double-left" />
                {'\u00A0'}Back To Homepage
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {
          this.state.loading ?
            <h1 className="main__loading">
              <FontAwesome name="spinner" pulse size="3x" />
              <br />
              Loading...
            </h1>
          :
          this.renderBody(this.props)
        }
      </div>
    );
  }
}

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
)(OrderSuccess);

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
  push: func.isRequired,
  products: objectOf(any),
  transactionInfo: shape({
    _id: string,
    date: string,
    comments: string,
    termsAgreement: bool,
    user: string,
    emailAddress: string,
    // invoiceEmailNoTracking: string,
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
