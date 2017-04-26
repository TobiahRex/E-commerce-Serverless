import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

function Promotion() {
  return (
    <div className="desc__promotion">
      <button
        className="sweep-right"
        onClick={() => browserHistory.push('/register')}
      >New members get 10% off their first order</button>
    </div>
  );
}
const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});
export default connect(mapStateToProps, null)(Promotion);
