import React from 'react';

import {
  FirstName,
  LastName,
} from './component.imports';

export default function BillingAddress() {
  return (
    <div className="checkout__billing">
      <div className="title">
        <h3>Billing Address</h3>
      </div>
      <div className="input__row">
        <FirstName />
        <LastName />
      </div>

      <div className="input__row">
        <div className="input__row--email">
          <p>Email <span className="required">*</span></p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--address-line-1">
          <p>Address Line 1 <span className="required">*</span></p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--address-line-2">
          <p>Address Line 2 <span className="required">*</span></p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--country">
          <p>Country <span className="required">*</span></p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--prefecture">
          <p>Prefecture <span className="required">*</span></p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--postal-code">
          <p>Postal Code <span className="required">*</span></p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--city">
          <p>City <span className="required">*</span></p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--phone">
          <p>Phone / Cell <span className="required">*</span></p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--same-as-billing">
          <input
            type="checkbox"
            onChange={e => console.log(e.target.value)}
          />
          <p>Use same address for shipping.<span className="required">*</span></p>
        </div>
      </div>
    </div>
  );
}
