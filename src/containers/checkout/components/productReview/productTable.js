import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

class ProductReviewComments extends PureComponent() {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({ cart: [...nextProps] }));
  }

  render() {
    return (
      <table className="table__container">
        <thead className="table__header">
          <tr className="header__row">
            <th className="header__row--product-name">Product Name</th>
            <th className="header__row--qty">Qty</th>
            <th className="header__row--subtotal">Subtotal</th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr className="body__row">
            <td className="body__row--product-name">
              <div className="image__container">
                <img alt="Juice" className="image--source" />
              </div>
              <div className="description__container">
                <p>Fruity Bamm-Bamm</p>
                <p>Nicotine Strength: <i>6mg</i></p>
              </div>
            </td>
            <td className="body__row--product-qty">
              <div className="qty--container">
                <p>3</p>
              </div>
            </td>
            <td className="body__row--product-subtotal">
              <div className="product-subtotal-container">
                <p><FontAwesome name="usd" />{'\u00A0'}90.00</p>
              </div>
            </td>
          </tr>
          <tr className="body__row">
            <td className="body__row--product-name">
              <div className="image__container">
                <img alt="Juice" className="image--source" />
              </div>
              <div className="description__container">
                <p>French Vanilla Mocha</p>
                <p>Nicotine Strength: <i>8mg</i></p>
              </div>
            </td>
            <td className="body__row--product-qty">
              <div className="qty--container">
                <p>1</p>
              </div>
            </td>
            <td className="body__row--product-subtotal">
              <div className="product-subtotal-container">
                <p><FontAwesome name="usd" />{'\u00A0'}30.00</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

ProductReviewComments.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductReviewComments;
