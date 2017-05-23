/* eslint-disable no-lone-blocks */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

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
