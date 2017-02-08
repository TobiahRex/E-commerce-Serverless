import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

/* TODO
1. Link to product page for edit-product.

2. finish deleteProduct().
*/

class NavbarCartTotalPrice extends PureComponent {
  static propTypes = {
    product_info: PropTypes.arrayOf(PropTypes.object),
  }

  deleteProduct = () => console.info('deleted product from drop down cart.');

  render() {
    return (
      <li className="products-list-card">
        <div className="products-list-card-image">
          {this.props.product_info.image ? '' : '<IMAGE HERE>'}
        </div>
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
      </li>
    );
  }
}

export default NavbarCartTotalPrice;
