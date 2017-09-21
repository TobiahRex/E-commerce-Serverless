/* eslint-disable no-lone-blocks */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ErrorMsg({ error, errorMsg }) {
  let style;
  let showErrorMsg = () => ('');

  if (error) {
    style = {
      display: 'block',
      opacity: 1,
    };
    switch (errorMsg) {
      case 'Too much': {
        showErrorMsg = () => ([
          <p key={new Buffer('maximum-of-4-bottles', 'utf8').toString('base64')}>
            <IntlMsg id="product.single.errors.max-bottles.part1" />
            &nbsp;
            <Link to={'/shipping_policy'}>
              <IntlMsg id="product.single.errors.max-bottles.part2" />
            </Link>
          </p>,
        ]);
      } break;

      case 'Not enough': {
        showErrorMsg = () => (
          <p>
            <IntlMsg id="product.single.errors.not-enough" />
          </p>
        );
      } break;

      case 'No strength': {
        showErrorMsg = () => (
          <p>
            <IntlMsg id="product.single.errors.no-strength" />
          </p>
        );
      } break;

      case 'Max items': {
        showErrorMsg = () => ([
          <p key={new Buffer('max-allowed', 'utf8').toString('base64')} >
            <IntlMsg id="product.single.errors.max-items" />
          </p>,
          <p key={new Buffer('max-allowed-link', 'utf8').toString('base64')}>
            <IntlMsg id="product.single.errors.max-items.help1" />
            <Link to={'/cart'}>
              &nbsp;<IntlMsg id="product.single.errors.max-items.help2" />
            </Link>
            &nbsp;<IntlMsg id="product.single.errors.max-items.help3" />
          </p>,
        ]);
      } break;

      case 'Out of stock': {
        showErrorMsg = () => ([
          <p key={new Buffer('out-of-stock', 'utf8').toString('base64')}>
            <IntlMsg id="product.single.errors.out-of-stock" />
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
    <div className="actions__warning-msg" style={style}>
      {showErrorMsg()}
    </div>
  );
}
const { bool, string } = PropTypes;
ErrorMsg.propTypes = {
  error: bool.isRequired,
  errorMsg: string.isRequired,
};
export default ErrorMsg;
