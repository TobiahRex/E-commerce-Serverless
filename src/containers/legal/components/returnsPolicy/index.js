import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function ReturnsPolicy() {
  return (
    <div className="returns-policy__main">
      <div className="main__breadcrumb--container">
        <ul className="breadcrumb--list">
          <li className="list--home">
            <Link to="/">
              Home
              <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
            </Link>
          </li>
          <li className="list--path last">
            Returns Policy
          </li>
        </ul>
      </div>
      <div className="main__title">
        <h1>Returns Policy</h1>
      </div>
      <div className="main__body">
        <p>
          <h4>REFUNDS</h4>
          <br />
          100% Money back guarantee for defective items. Defective items or missing parts must be reported within 15 days of delivery. Shipping damage(s) must be reported immediately (same day as delivery | UTC +9:00 TimeZone) upon receipt of package(s). Returns and exchanges for any other reason will not be accepted.
          <br />
          <br />
          <h4>CANCELLATIONS</h4>
          <br />
          Cancellations on orders can be requestd via email to support@nj2jp.com (include your order number located in your invoice email as well as provided on the website directly after successfully purchasing your order).  A Confirmation email from Nic Juice To Japan (NJ2JP) for cancellation(s) must be received by the customer before the close of business on the same day (Before 24:00 | UTC +9:00 TimeZone) of purchase for the cancellation to be valid.
        </p>
      </div>
    </div>
  );
}
