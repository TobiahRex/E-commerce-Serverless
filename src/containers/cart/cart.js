import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

import ShoppingCartWeb from './ShoppingCart/shoppingCart_web';
import ShoppingCartMobile from './ShoppingCart/shoppingCart_mobile';
import ShoppingCartWebProductRow from './ShoppingCart/shoppingCart_web_productRow';
import ShoppingCartMobileProductCard from './ShoppingCart/shoppingCart_mobile_productCard';

const { bool, string, number, arrayOf, shape, objectOf, any } = PropTypes;

class ShoppingCart extends Component {
  static propTypes = {
    mobileActive: string.isRequired,
    taxRate: number.isRequired,
    loggedIn: bool.isRequired,
    userCart: arrayOf(
      shape({
        qty: number,
        strength: number,
        product: string,
      }),
    ),
    guestCart: arrayOf(
      shape({
        _id: string,
        qty: number,
        strength: number,
        userId: string,
        product: objectOf(any),
      }),
    ),
  }

  static defaultProps = {
    userCart: null,
    guestCart: null,
  }

  static juices = [{
    imgSrc: 'https://s3-ap-northeast-1.amazonaws.com/nj2jp-react/nj2jp_juice_card_fbb.png',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
    price: '30',
    qty: 2,
    subTotal: 0,
  }, {
    imgSrc: 'https://s3-ap-northeast-1.amazonaws.com/nj2jp-react/nj2jp_juice_card_fvm.png',
    name: 'French Vanilla Mocha',
    sku: '123123123',
    nicotine: '6mg',
    price: '30',
    qty: 2,
    subTotal: 0,
  }];
  constructor(props) {
    super(props);

    this.state = {
      mobileActive: props.mobileActive,
      grandTotal: 0,
      taxes: 0,
    };
  }

  componentDidMount() {
    this.calcProductAnalysis();
  }

  componentWillReceiveProps({ mobileActive, taxRate }) {
    if (this.state.mobileActive !== mobileActive) {
      this.setState({ mobileActive });
    }
    if (this.state.taxRate !== taxRate) {
      this.setState({ taxRate });
    }
  }

  /**
  * Function: "calcProductAnalysis"
  * 1) For each product currently in the cart, calculate the total for that item by multiplying the underlying price with the quantity requested.
  * 2) Add that the individual subtotal to each juiceObj.
  * 3) Add that amount to the "grandTotal".
  *
  * @param {none} N/A
  *
  * @return {N/A} Set's new state for taxes & grandTotal.
  */
  calcProductAnalysis = () => {
    let grandTotal = 0;

    ShoppingCart.juices.forEach((juiceObj) => {
      juiceObj.subTotal = (juiceObj.qty * Number(juiceObj.price));
      grandTotal += juiceObj.subTotal;
    });
    const taxes = Number((grandTotal * this.props.taxRate).toFixed(2));
    console.log('taxes: ', taxes, '\ngrandTotal: ', grandTotal);
    grandTotal += taxes;

    this.setState({ taxes, grandTotal });
  }

  /**
  * Function: "renderDeviceCart"
  * 1) Dynamically render device cart based on mobile or web version.
  *
  * @param {none} N/A
  *
  * @return {component} - Return either Web or Mobile version of parent Shopping Cart component.
  */
  renderDeviceCart = () => {
    const { grandTotal, taxes } = this.state;
    if (this.props.mobileActive === 'false') {
      return (
        <ShoppingCartWeb
          renderWebJuices={this.renderJuices}
          grandTotal={grandTotal}
          taxes={taxes}
        />
      );
    }
    return (
      <ShoppingCartMobile
        renderMobileJuices={this.renderJuices}
        grandTotal={grandTotal}
        taxes={taxes}
      />
    );
  }

  /**
  * Function: "renderJuices"
  * 1) Depending on view (mobile or web) dynamically assign cart values to repsective components.
  *
  * @param {none} N/A
  *
  * @return {N/A} Return either Web or Mobile version of Shopping Cart child component.
  */
  renderJuices = () => (
    ShoppingCart.juices.map((juiceObj, i) => {
      const { grandTotal, taxes } = this.state;

      if (this.state.mobileActive === 'false') {
        return (
          <ShoppingCartWebProductRow
            key={`shopping-cart-table-row-${juiceObj.name}`}
            keyNum={i}
            juiceObj={juiceObj}
          />
        );
      }
      return (
        <ShoppingCartMobileProductCard
          key={`shopping-cart-table-row-${juiceObj.name}`}
          keyNum={i}
          juiceObj={juiceObj}
          taxes={taxes}
          grandTotal={grandTotal}
        />
      );
    })
  );

  render() {
    return (
      <div className="shopping-cart-main">
        <div className="shopping-cart-breadcrumb-container">
          <ul className="shopping-cart-breadcrumb-list">
            <li className="shopping-cart-breadcrumb-path">
              <Link className="breadcrumb-link" to="/">Home</Link>
              <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
            </li>
            <li className="shopping-cart-breadcrumb-path">
              Shopping Cart
            </li>
          </ul>
        </div>
        <div className="shopping-cart-main-title">
          <h1>Shopping Cart</h1>
        </div>
        {this.renderDeviceCart()}
      </div>
    );
  }
}
const mapStateToProps = ({ mobile, orders, auth, user }) => ({
  mobileActive: mobile.mobileType || 'false',
  taxRate: orders.taxRate.totalRate,
  loggedIn: auth.loggedIn || false,
  userCart: auth.loggedIn ? user.profile.shopping.cart : [],
  guestCart: orders.cart,
});
export default connect(mapStateToProps, null)(ShoppingCart);
