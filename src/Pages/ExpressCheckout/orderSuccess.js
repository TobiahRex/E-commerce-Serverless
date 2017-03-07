import React from 'react';
// import { Link, browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';


export default function OrderSuccess() {
  return (
    <div className="ordered--main">
      <div className="ordered--container">
        <div className="ordered__title--icon">
          <FontAwesome name="question-circle" />
        </div>
        <div className="ordered__title--msg">
          <h1>Your order has been successfully placed!</h1>
          <h4>The invoice shown below has been sent to your email.</h4>
        </div>
      </div>
    </div>
  );
}
