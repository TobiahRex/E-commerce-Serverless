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

  render() {
    return (
      <div className="products">
        <ul className="products-list">
          {this.renderProducts(this.props.products)}
          {/* <li className="products-list-card">
            <div className="products-list-card-image">image</div>
            <div className="products-list-card-info">
            <div className="product-title">Fruity Bamm-Bamm</div>
            <div className="product-qty">3 x $ 15.00</div>
            <div className="nic-strength"><i>6mg</i></div>
            </div>
            <div className="products-list-card-actions">
            <div href="" className="products-list-card-actions-edit">
            <Link>
            <FontAwesome
            className="products-list-card-actions-edit-icon"
            name="pencil"
            />
            </Link>
            </div>
            <div href="" className="products-list-card-actions-delete">
            <FontAwesome
            className="products-list-card-actions-delete-icon"
            name="trash-o"
            />
            </div>
            </div>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default NavbarCartTotalPrice;
