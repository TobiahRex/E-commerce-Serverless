import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FormattedMessage as IntlMsg,
  FormattedNumber as IntlInt,
} from 'react-intl';

const { number } = PropTypes;

class NavbarCartTotalPrice extends PureComponent {
  static propTypes = {
    cart_total: number,
  }

  static defaultProps = {
    cart_total: 0,
  }
  /* eslint-disable react/style-prop-object */
  render() {
    let currency = '';

    switch (IntlLocale) {
      case 'ja': currency = 'jpy'; break;
      case 'en': currency = 'usd'; break;
      default: currency = 'usd';
    }
    return (
      <div className="total-price">
        <span className="total-price-title">
          <IntlMsg id="navbar.cart.total-price" />
        </span>
        <span className="total-price-amount">
          <IntlInt
            value={this.props.cart_total}
            style="currency"
            currency={currency}
            minimumFractionDigits="2"
            maximumFractionDigits="2"
          />
        </span>
      </div>
    );
  }
  /* eslint-enable react/style-prop-object */
}

export default NavbarCartTotalPrice;
