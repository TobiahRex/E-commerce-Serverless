import React from 'react';
import { Link } from 'react-router';

function ProductActions({ error }) {
  let style;
  if (error) {
    style = {
      display: 'flex',
      opacity: 1,
      height: '100%',
      width: '100%',
    };
  } else {
    style = {
      display: 'none',
      opacity: 0,
      height: 0,
      width: 0,
    };
  }
  return (
    <div className="actions__warning-msg" style={style}>
      <p>
        Maximum of 4 bottles per customer per address. More info {'\u00A0'}
        <Link to={'/shipping_policy'}>here.</Link>
      </p>
      <p>Japanese Statute # 123123123.</p>
    </div>
  );
}
const { bool } = React.PropTypes;
ProductActions.propTypes = {
  error: bool.isRequired,
};
export default ProductActions;
