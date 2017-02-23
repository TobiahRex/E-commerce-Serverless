import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

import ShoppingCartWeb from './ShoppingCart/shoppingCart_web';
import ShoppingCartMobile from './ShoppingCart/shoppingCart_mobile';
import ShoppingCartWebProductRow from './ShoppingCart/shoppingCart_web_productRow';
import ShoppingCartMobileProductCard from './ShoppingCart/shoppingCart_mobile_productCard';


class ShoppingCart extends Component {
  static propTypes = {
    mobileActive: PropTypes.string.isRequired,
  }
  static juices = [{
    imgSrc: 'https://s3-ap-southeast-2.amazonaws.com/nj2jp/frenchVanilla_zero_tightCrop_smallSize_zero.jpg',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
    price: '30',
    qty: 2,
  }, {
    imgSrc: 'https://s3-ap-southeast-2.amazonaws.com/nj2jp/frenchVanilla_zero_tightCrop_smallSize_zero.jpg',
    name: 'Fruity Bamm-Bamm',
    sku: '123123123',
    nicotine: '6mg',
    price: '30',
    qty: 2,
  }];
  constructor(props) {
    super(props);

    this.state = {
      mobileActive: props.mobileActive,
      grandTotal: 0,
      taxes: 0,
      subTotal: 0,
    };
  }

  componentDidMount() {
    this.calcProductAnalysis();
  }

  componentWillReceiveProps({ mobileActive }) {
    if (this.state.mobileActive !== mobileActive) {
      this.setState({ mobileActive });
    }
  }

  calcProductAnalysis = () => {
    let subTotal = 0;
    let taxes = 0;
    let grandTotal = 0;

    ShoppingCart.juices.forEach((juiceObj) => {
      subTotal += (juiceObj.qty * Number(juiceObj.price));
      taxes += (((juiceObj.qty * Number(juiceObj.price)) * this.state.taxesPercentage) * 100);
      grandTotal += subTotal + taxes;
    });

    this.setState({ subTotal, taxes, grandTotal });
  }

  renderDeviceCart = () => {
    const { grandTotal, taxes } = this.state;
    if (this.props.mobileActive === 'false') {
      return (
        <ShoppingCartWeb
          renderWebJuices={this.renderJuices}
          grandTotal={grandTotal}
          taxes={taxes}
        />
      );
    }
    return (
      <ShoppingCartMobile
        renderMobileJuices={this.renderJuices}
        grandTotal={grandTotal}
        taxes={taxes}
      />
    );
  }

  renderJuices = () => (
    ShoppingCart.juices.map((juiceObj, i) => {
      const { subTotal, grandTotal, taxes } = this.state;

      if (this.state.mobileActive === 'false') {
        return (
          <ShoppingCartWebProductRow
            key={`shopping-cart-table-row-${juiceObj.name}-${i}`}
            keyNum={i}
            juiceObj={juiceObj}
            subTotal={subTotal}
          />
        );
      }
      return (
        <ShoppingCartMobileProductCard
          key={`shopping-cart-table-row-${juiceObj.name}-${i}`}
          keyNum={i}
          juiceObj={juiceObj}
          subTotal={subTotal}
          taxes={taxes}
          grandTotal={grandTotal}
        />
      );
    })
  );

  render() {
    return (
      <div className="shopping-cart-main">
        <div className="shopping-cart-breadcrumb-container">
          <ul className="shopping-cart-breadcrumb-list">
            <li className="shopping-cart-breadcrumb-path">
              <Link className="breadcrumb-link" to="/">Home</Link>
              <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
            </li>
            <li className="shopping-cart-breadcrumb-path">
              Shopping Cart
            </li>
          </ul>
        </div>
        <div className="shopping-cart-main-title">
          <h1>Shopping Cart</h1>
        </div>
        {this.renderDeviceCart()}
      </div>
    );
  }
}
const mapStateToProps = ({ mobile }) => ({
  mobileActive: mobile.mobileType || 'false',
});
export default connect(mapStateToProps, null)(ShoppingCart);
