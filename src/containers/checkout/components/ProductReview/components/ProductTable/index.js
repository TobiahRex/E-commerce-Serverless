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
      <div className="product-list__product" key={_id}>
        <div className="product__juice-container">
          <div className="checkout-juice-container__img-container">
            <img
              alt="Juice"
              className="express-checkout__img-container--img"
              src="/images/nj2jp_juice_card_fvm.png"
            />
          </div>
          <div className="juice-container__product-description">
            <div className="product-description__product-title">
              {product.title[IntlLocale]}
            </div>
            <div className="product-description__additional-info">
              <IntlMsg id="checkout.product-review.table.strength" />&nbsp; <i>{NicotineStrengthConverter(product.nicotineStrength)}</i>
            </div>
          </div>
        </div>
        <div className="product-list__qty">
          <div className="qty__blurb">
            {qty}
          </div>
        </div>
        <div className="product-list__sub-total">
          <div className="sub-total__blurb">
            <FontAwesome name="usd" />&nbsp;
            {(Number(product.price) * qty).toFixed(2)}
          </div>
        </div>
      </div>
    ));

  render() {
    const {
      cart,
    } = this.props;

    return (
      <div className="product-review__table-container">
        <div className="table-container__top-row">
          <div className="top-row__hdr-container">
            <div className="hdr-container__blurb">
              <IntlMsg id="checkout.product-review.table.header.product" />
            </div>
          </div>
          <div className="product-review__qty-container">
            <div className="qty-container__blurb">
              <IntlMsg id="checkout.product-review.table.header.qty" />
            </div>
          </div>
          <div className="product-review__total-container">
            <div className="total-container__blurb">
              <IntlMsg id="checkout.product-review.table.header.subtotal" />
            </div>
          </div>
        </div>
        <div className="table-container__product-list">
          {this.renderTableRow(cart)}
        </div>
      </div>
    );
  }
}

ProductReviewTable.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductReviewTable;
