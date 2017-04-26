import React from 'react';
import { Link } from 'react-router';

function ErrorMsg({ error }) {
  let style;
  if (error) {
    style = {
      display: 'block',
      opacity: 1,
    };
  } else {
    style = {
      display: 'none',
      opacity: 0,
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
ErrorMsg.propTypes = {
  error: bool.isRequired,
};
export default ErrorMsg;
