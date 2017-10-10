/* eslint-disable no-lone-blocks */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

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
          >
            Maximum of 4 bottles, per customer, per address. More info {'\u00A0'}
            <Link to={'/shipping_policy'}>here.</Link>
          </p>,
          <p
            key={new Buffer('japanese-statute', 'utf8').toString('base64')}
          >
            Japanese Statute # 123123123.
          </p>,
        ]);
      } break;
      case 'Not enough': {
        showErrorMsg = () => (
          <p>Oops! Please choose a quantity of at least 1. 😀 </p>
        );
      } break;
      case 'No strength': {
        showErrorMsg = () => (
          <p>You must choose a Nicotine Strength.</p>
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
    <div className="actions__warning-msg" style={style}>
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
