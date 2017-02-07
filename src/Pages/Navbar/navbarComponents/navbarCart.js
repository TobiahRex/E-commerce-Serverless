import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

/* TODO
1. Navbar has an entire CRUD capability if hovered over.  Therefore the component that is revealed upon hover, will be passed down several CRUD like methods via props to PureComponents.

2. The Link comp, will nest the title & qty divs only.  The CartDetails component will exist OUTSIDE the link tab.

3. The Cart Details has 3 LINKS
- Edit: Takes the user back to the product page of the item.
- View Cart: goes to cart.
- Checkout: goes to checkout.
*/

class NavbarCart extends Component {
  constructor(props) {
    super(props);
  }

  removeItem = () => console.info('Removed item from cart');

  render() {
    return (
      <div className="navbar actionSection upper mycart-container">
        <div className="mycart">
          <span className="main-button">
            <Link className="link">
              <div className="title">
                <span>My Cart</span>
              </div>
              <div className="cart-qty">
                <span>0</span>
              </div>
            </Link>
          </span>
          <span className="dropdown-content">
            <div className="container">
              <div className="promotion">
                <span className="top-line">
                  Buy 4 Bottles
                </span>
                <span className="bottom-line">
                  Get 25% Off
                </span>
              </div>
              <div className="recently-added">
                <span>Recently Added Item(s)</span>
              </div>
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
              <div className="total-price">
                <span className="title">Total Price</span>
                <span className="amount">&nbsp; $ 10.00</span>
              </div>
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
        </div>
      </div>
    );
  }
}

export default NavbarCart;
