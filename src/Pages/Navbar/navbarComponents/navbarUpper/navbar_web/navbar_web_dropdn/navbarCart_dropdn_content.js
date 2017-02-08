import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import NavbarCartPromotion from './navbarCart_dropdn_promotion';
import NavbarCartRecentadd from './navbarCart_dropdn_recentadd';
import NavbarCartTotalPrice from './navbarCart_dropdn_totalPrice';

class NavbarCartDropdnContent extends PureComponent {
  render() {
    return (
      <span className="dropdown-content">
        <div className="container">
          <NavbarCartPromotion />
          <NavbarCartRecentadd />
          <div className="products">
            <ul className="product-list">
              <li className="product-card">
                <div className="product-image">image</div>
                <div className="product-info">
                  <div className="product-title">Fruity Bamm-Bamm</div>
                  <div className="product-qty">3 x $ 15.00</div>
                  <div className="nic-strength"><i>6mg</i></div>
                </div>
                <div className="product-edit">
                  <div href="" className="edit-product">
                    <FontAwesome
                      className="edit-product-icon"
                      name="pencil"
                    />
                  </div>
                  <div href="" className="delete-product">
                    <FontAwesome
                      className="edit-product-icon"
                      name="trash-o"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <NavbarCartTotalPrice />
          <div className="action-buttons">
            <Link className="view-cart">
              <span>View Cart</span>
            </Link>
            <Link className="checkout">
              <span>Checkout</span>
            </Link>
          </div>
        </div>
      </span>
    );
  }
}

export default NavbarCartDropdnContent;
