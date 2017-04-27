import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavbarCartDropdnContent from './navbarCart_dropdn_content';
import NavbarCartMainButton from './navbarCart_mainButton';

const { number, arrayOf, object, func } = PropTypes;

class NavbarCart extends PureComponent {
  static propTypes = {
    qty: number.isRequired,
    cartProducts: arrayOf(object).isRequired,
    editCartItem: func.isRequired,
    deleteFromCart: func.isRequired,
  }

  cartTotal = () => {
    const cartTotal = this.props.cartProducts
      .reduce((acc, { price }) => (acc + Number(price)), 0);
    return cartTotal;
  }

  render() {
    const {
      qty,
      cartProducts,
      editCartItem,
      deleteFromCart,
    } = this.props;
    return (
      <div className="mycart-main">
        <NavbarCartMainButton qty={qty} />
        <NavbarCartDropdnContent
          cartTotal={this.cartTotal()}
          cartProducts={cartProducts}
          editCartItem={editCartItem}
          deleteFromCart={deleteFromCart}
        />
      </div>
    );
  }
}
export default NavbarCart;
