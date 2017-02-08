import React, { PropTypes, PureComponent } from 'react';

import NavbarCartProductsCard from './navbarCart_dropdn_products_card';

/* TODO
1. Complete Link to product page for edit-product.

NOTE: The renderProducts function uses a className convention to name the key value + the index (+1).
It passes the whole product object as "product-info".
*/

class NavbarCartTotalPrice extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
  }

  renderProducts = (products) => {
    if (products.length) {
      return products.map((product, i) =>
        <NavbarCartProductsCard
          key={`products-list-${i + 1}`}
          product_info={product}
        />);
    }
    return 1;
  }

  emptyCart = () =>
    <div className="products-list-empty">
      Your Cart Is Currently Empty
    </div>

  render() {
    return (
      <div className="products">
        <ul className="products-list">
          {
            this.props.products ?
            this.renderProducts(this.props.products) :
            this.emptyCart()
          }
        </ul>
      </div>
    );
  }
}

export default NavbarCartTotalPrice;
