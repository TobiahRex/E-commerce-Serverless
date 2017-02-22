const propTypes = {
  juiceObj: PropTypes.objectOf(PropTypes.any.isRequired),
  keyNum: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
}

function ShoppingCartMobileProductCard() {

}
return (
  <li className="shopping-cart-mobile-product-parent">
    <div className="shopping-cart-mobile-product-parent">

    </div>
  </li>
  <li className="shopping-cart-mobile-product-parent">
    <div className="shopping-cart-mobile-product-img">
      <img src={juiceObj.imgSrc}
        alt={jucieObj.name}
        className="shopping-cart-mobile-product-img-src"
      />
    </div>

  </li>
)
