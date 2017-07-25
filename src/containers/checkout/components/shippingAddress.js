import React from 'react';

export default function ShippingAddress() {
  return (
    <div className="checkout__shipping">
      <div className="title">
        <h3>Shipping Address</h3>
      </div>
      <div className="input__row">
        <div className="input__row--first-name">
          <p>First Name</p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
        <div className="input__row--last-name">
          <p>Last Name</p>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          />
        </div>
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
    </div>
  );
}
