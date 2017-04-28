import React, { PropTypes, PureComponent } from 'react';
import _ from 'lodash';
import {
  NavbarCartProductsCardImage,
  NavbarCartProductsCardInfo,
  NavbarCartProductsCardActions,
} from './imports';

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
    </div>
  )
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({ ...nextProps });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(nextState, this.state)) return true;
    return false;
  }

  renderProducts = products => (
    products.map((juiceObj) => {
      const { id, title, imageUrl, routeTag } = juiceObj;
      return (
        <li
          className="products-list-card"
          key={new Buffer(`${routeTag}${title}`, 'utf8').toString('base64')}
        >
          <NavbarCartProductsCardImage
            imageUrl={imageUrl}
            title={title}
          />
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
            this.props.cartProducts.length ? this.renderProducts(this.props.cartProducts) : this.emptyCart()
          }
        </ul>
      </div>
    );
  }
}
export default NavbarCartProducts;
