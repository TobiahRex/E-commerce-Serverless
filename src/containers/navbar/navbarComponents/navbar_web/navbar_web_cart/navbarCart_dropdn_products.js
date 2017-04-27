import React, { PropTypes, PureComponent } from 'react';
import NavbarCartProductsCardInfo from './navbarCart_dropdn_products_card_info';
import NavbarCartProductsCardActions from './navbarCart_dropdn_products_card_actions';

const { arrayOf, object, func } = PropTypes;

class NavbarCartProducts extends PureComponent {
  static propTypes = {
    cartProducts: arrayOf(object).isRequired,
    editCartItem: func.isRequired,
    deleteFromCart: func.isRequired,
  }

  emptyCart = () => (
    <div className="products-list-empty">
      Your Cart Is Currently Empty
    </div>)

  renderProducts = juiceProducts => (
    juiceProducts.map((juiceObj) => {
      const { id, title, imageUrl, routeTag } = juiceObj;
      return (
        <li
          key={new Buffer(title, 'utf8').toString('base64')}
          className="products-list-card"
        >
          <div className="products-list-card-image">
            <img
              className="products-list-card-image-src"
              src={imageUrl}
              alt={`${title} juice`}
            />
          </div>
          <NavbarCartProductsCardInfo juiceObj={juiceObj} />
          <NavbarCartProductsCardActions
            juiceId={id}
            routeTag={routeTag}
            editCartItem={this.props.editCartItem}
            deleteFromCart={this.props.deleteFromCart}
          />
        </li>
      );
    })
  )

  render() {
    return (
      <div className="products">
        <ul className="products-list">
          {
            this.props.cartProducts.length ?
            this.renderProducts(this.props.cartProducts) :
            this.emptyCart()
          }
        </ul>
      </div>
    );
  }
}
export default NavbarCartProducts;
