import React from 'react';

import {
  BreadCrumb,
} from './component.imports';


function OrderTracking() {
  return (
    <div className="order-tracking">
      <BreadCrumb
        paths={['Home']}
        classes={'home'}
        destination={['']}
        lastCrumb="Order Tracking"
      />
      <div className="header-title">
        <h2>Track Your Order</h2>
      </div>
      <div className="order-tracking__header">
        <h4>Shipped #: {Date.now()}</h4>
        <h4>Tracking #: 123123123123</h4>
      </div>

      {/* NOTE: The background-colors for borders need to be dynamically created. */}
      <div className="order-tracking__status-bar">
        <ul className="status-bar--list">
          <li className="list--option">
            <div>
              <p>Packaging</p>
            </div>
          </li>
          <li className="list--option">
            <div>
              <p>Shipped</p>
            </div>
          </li>
          <li className="list--option">
            <div>
              <p>Delivered</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="order-tracking__latest-activity">
        <table className="activity--table">
          <thead className="table__header">
            <tr className="header-row">
              <td className="header--location">
                <h3>Location</h3>
              </td>
              <td className="header--date">
                <h3>Date</h3>
                <p>(YYYYMMDD)</p>
              </td>
              <td className="header--activity">
                <h3>Activity</h3>
              </td>
            </tr>
          </thead>
          <tbody className="table__body">
            {/* NOTE: Table row needs to be dynamically generated. */}
            <tr className="body--row">
              <td className="body--location">
                <p>Los Angeles, CA</p>
              </td>
              <td className="body--date">
                <p>20171017</p>
              </td>
              <td className="body--activity">
                <p>Arrived at Transit Point</p>
              </td>
            </tr>
            <tr className="body--row">
              <td className="body--location">
                <p>Tokyo, Japan</p>
              </td>
              <td className="body--date">
                <p>20171017</p>
              </td>
              <td className="body--activity">
                <p>Arrived</p>
              </td>
            </tr>
            <tr className="body--row">
              <td className="body--location">
                <p>Kansai, Japan</p>
              </td>
              <td className="body--date">
                <p>20171017</p>
              </td>
              <td className="body--activity">
                <p>Arrived At Destination</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OrderTracking;
