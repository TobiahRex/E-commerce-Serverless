import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  nicotineStrengthConverter as NicotineStrengthConverter,
} from '../../assets/utils';

const { arrayOf, object } = PropTypes;

class ProductReviewTable extends PureComponent {
  static propTypes = {
    cart: arrayOf(object).isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({ cart: [...nextProps] }));
  }

  renderTableRow = cart => cart
    .map(({ _id, qty, product }) => (
      <tr className="body__row" key={_id}>
        <td className="body__row--product-name">
          <div className="image__container">
            <img alt="Juice" className="image--source" />
          </div>
          <div className="description__container">
            <p>{product.title[IntlLocale]}</p>
            <p>
              <IntlMsg id="checkout.product-review.table.strength" />&nbsp; <i>{NicotineStrengthConverter(product.nicotineStrength)}</i>
            </p>
          </div>
        </td>
        <td className="body__row--product-qty">
          <div className="qty--container">
            <p>{qty}</p>
          </div>
        </td>
        <td className="body__row--product-subtotal">
          <div className="product-subtotal-container">
            <p>
              <FontAwesome name="usd" />&nbsp;
              {(Number(product.price) * qty).toFixed(2)}
            </p>
          </div>
        </td>
      </tr>
    ));

  render() {
    const {
      cart,
    } = this.props;

    return (
      <table className="table__container">
        <thead className="table__header">
          <tr className="header__row">
            <th className="header__row--product-name">
              <IntlMsg id="checkout.product-review.table.header.product" />
            </th>
            <th className="header__row--qty">
              <IntlMsg id="checkout.product-review.table.header.qty" />
            </th>
            <th className="header__row--subtotal">
              <IntlMsg id="checkout.product-review.table.header.subtotal" />
            </th>
          </tr>
        </thead>
        <tbody className="table__body">
          {this.renderTableRow(cart)}
        </tbody>
      </table>
    );
  }
}

ProductReviewTable.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductReviewTable;
