import React, { PropTypes, PureComponent } from 'react';

import NavbarCartProductsCardActions from './navbarCart_dropdn_products_card_actions';
import NavbarCartProductsCardInfo from './navbarCart_dropdn_products_card_info';
/* TODO
1. Link to product page for edit-product.

2. finish deleteProduct().
*/

class NavbarCartProductsCard extends PureComponent {
  static propTypes = {
    productInfo: PropTypes.objectOf(PropTypes.any),
  }

  deleteProduct = () => console.info('deleted product from drop down cart.');

  render() {
    const { image, title, quantity, price, nicotine } = this.props.productInfo;
    return (
      <li className="products-list-card">
        <div className="products-list-card-image">
          <img className="products-list-card-image-src" src={image} alt={`${title} juice`} />
        </div>
        <NavbarCartProductsCardInfo
          title={title}
          price={price}
          quantity={quantity}
          nicotine={nicotine}
        />
        <NavbarCartProductsCardActions />
      </li>
    );
  }
}

export default NavbarCartProductsCard;
