import React, { PropTypes, PureComponent } from 'react';

/* TODO
1. Link to product page for edit-product.

2. finish deleteProduct().
*/

class NavbarCartTotalPrice extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
  }

  renderProducts = () => console.info('rendered products');

  deleteProduct = () => console.info('deleted product from drop down cart.');

  render() {
    return (
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
                <Link>
                  <FontAwesome
                    className="edit-product-icon"
                    name="pencil"
                  />
                </Link>
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
    );
  }
}

export default NavbarCartTotalPrice;
