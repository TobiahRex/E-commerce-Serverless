import React from 'react';
// import { Link, browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import uuid from 'uuid';


export default function OrderSuccess() {
  return (
    <div className="ordered--main">
      <div className="ordered--container">
        <div className="ordered__title">
          <div className="title--icon">
            <FontAwesome name="question-circle" />
          </div>
          <div className="title--msg">
            <h1>Your order has been successfully placed!</h1>
            <h4>The invoice shown below has been sent to your email.</h4>
          </div>
        </div>
        <div className="ordered__header">
          <div className="header--date">
            <p>Date: {moment().format('LLLL')}</p>
            <p>Invoice #: {uuid()}</p>
          </div>
          <div className="header--status">
            {'<Shipping Status>'}
          </div>
          <div className="header--info">
            <div className="header__tracking">
              <p>Tracking #: {uuid()}</p>
              <p>Order #: {uuid()}</p>
            </div>
            <div className="header__price">
              Price: <FontAwesome name="usd" />{'\u00A0'}32.14
            </div>
          </div>
        </div>
        <div className="ordered__addresses">
          <div className="addresses--shipto">
            <fieldset className="shipto--fieldset">
              <legend className="shipto__legend">Ship To</legend>
              <div className="shipto__name">
                <p className="name--firstName">Bruce</p>
                <p className="name--lastName">Wayne</p>
              </div>
              <div className="shipto__address">
                <p>{'<Address>'}</p>
              </div>
              <div className="shipto__city-prefecture">
                <p className="city-prefecture--city">{'<City>'}</p>
                <p className="city-prefecture--prefecture">{'<Prefecture>'}</p>
              </div>
              <div className="shipto__postal-code">
                <p>{'<Postal Code>'}</p>
              </div>
              <div className="shipto__country">
                <p>Japan</p>
              </div>
              <div className="shipto__telephone">
                <p className="telephone--area-code">({'<area code>'})</p>
                <p className="telephone--first-half">
                  {'\u00A0'}{'<first half>'}
                </p>
                <p className="telephone--second-half">
                  {'\u00A0'}{'<second half>'}
                </p>
              </div>
            </fieldset>
          </div>
          <div className="addresses--billto">

          </div>
        </div>
      </div>
    </div>
  );
}
