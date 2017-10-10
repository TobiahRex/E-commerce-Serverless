/* eslint-disable no-lone-blocks */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ErrorMsg({ error: { hard, soft }, errorMsg }) {
  let style;
  let showErrorMsg = () => ('');

  if (hard || soft) {
    style = {
      display: 'block',
      opacity: 1,
    };
    switch (errorMsg) {
      case 'Too much': {
        showErrorMsg = () => ([
          <p
            key={new Buffer('maximum-of-4-bottles', 'utf8').toString('base64')}
            className="error-msg__blurb-container"
          >
            <IntlMsg id="cart.errors.max.sub1" />
            <Link to={'/shipping_policy'}>
              <em className="error-msg__link">
                <IntlMsg id="cart.errors.max.sub2" />
              </em>.
            </Link>
          </p>,
        ]);
      } break;
      case 'Not enough': {
        showErrorMsg = () => (
          <p>
            <IntlMsg id="cart.errors.not-enough" />
          </p>
        );
      } break;
      case 'No strength': {
        showErrorMsg = () => (
          <p>
            <IntlMsg id="cart.errors.no-strength" />
          </p>
        );
      } break;
      case 'Max items': {
        showErrorMsg = () => ([
          <p
            key={new Buffer('max-allowed', 'utf8').toString('base64')}
          >
            You already have the max allowed quantity.
          </p>,
          <p key={new Buffer('max-allowed-link', 'utf8').toString('base64')}>
            Click{'\u00A0'}<Link to={'/cart'}>here</Link> to remove some items.
          </p>,
        ]);
      } break;
      default: { showErrorMsg = () => (<p>{errorMsg}</p>); }
    }
  } else {
    style = {
      display: 'none',
      opacity: 0,
    };
  }
  return (
    <div className="qty-container__error-msg" style={style}>
      {showErrorMsg()}
    </div>
  );
}
const { bool, string, shape } = PropTypes;
ErrorMsg.propTypes = {
  error: shape({
    hard: bool,
    soft: bool,
  }),
  errorMsg: string,
};
ErrorMsg.defaultProps = {
  error: {
    hard: false,
    soft: false,
  },
  errorMsg: '',
};

export default ErrorMsg;
