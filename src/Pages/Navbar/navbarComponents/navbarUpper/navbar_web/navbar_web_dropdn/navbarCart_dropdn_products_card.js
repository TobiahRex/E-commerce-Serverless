import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

/* TODO
1. Link to product page for edit-product.

2. finish deleteProduct().
*/

class NavbarCartProductsCard extends PureComponent {
  static propTypes = {
    product_info: PropTypes.objectOf(PropTypes.any),
  }

  deleteProduct = () => console.info('deleted product from drop down cart.');

  render() {
    const { image, title, quantity, price, nicotine } = this.props.product_info;
    return (
      <li className="products-list-card">
        <div className="products-list-card-image">
          {image ? '' : '<IMAGE HERE>'}
        </div>
        <div className="products-list-card-info">
          <div className="product-title">
            {title ? `${this.props.product_info.title}` : '<TITLE HERE>'}
          </div>
          <div className="product-qty">
            {quantity ? `${quantity} x $ ${price}.00` : '<QTY HERE>'}
          </div>
          <div className="nic-strength">
            <i>
              {nicotine ? `${nicotine}mg` : '<NIC STRENGTH HERE>'}
            </i>
          </div>
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

export default NavbarCartProductsCard;
