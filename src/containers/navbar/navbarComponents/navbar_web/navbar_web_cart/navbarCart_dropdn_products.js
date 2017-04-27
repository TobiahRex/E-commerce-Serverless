import React, { PropTypes, PureComponent } from 'react';
import NavbarCartProductsCardInfo from './navbarCart_dropdn_products_card_info';

/* TODO
1. Complete Link to product page for edit-product.

NOTE: The renderProducts function uses a className convention to name the key value + the index (+1).
It passes the whole product object as "product-info".
*/

class MyCartProductList extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
  }

  emptyCart = () =>
  <div className="products-list-empty">
    Your Cart Is Currently Empty
  </div>

  renderProducts = juiceProducts => (
    juiceProducts.map((juiceObj) => {
      const { id, title, imageUrl, routeTag } = juiceObj;
      return (
        <li
          key={new Buffer(title, 'utf8').toString('base64')}
          className="products-list-card"
        >
          <div className="products-list-card-image">
            <img className="products-list-card-image-src" src={imageUrl} alt={`${title} juice`} />
          </div>
          <NavbarCartProductsCardInfo juiceObj={juiceObj} />
          <NavbarCartProductsCardActions juiceId={id} tag={routeTag} />
        </li>
      );
    })
  )

    render() {
      return (
        <div className="products">
          <ul className="products-list">
            {
              this.props.products.length ?
              this.renderProducts(this.props.products) :
              this.emptyCart()
            }
          </ul>
        </div>
      );
    }
  }

  export default MyCartProductList;
