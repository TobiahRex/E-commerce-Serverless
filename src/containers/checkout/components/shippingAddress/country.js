import React from 'react';
import Validation from 'react-validation';

export default function Country() {
  return (
    <div className="input__row">
      <div className="input__row--country">
        <p>Country <span className="required">*</span></p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          name="shippingCountry"
          validations={['required']}
          value="Japan"
        />
      </div>
    </div>
  );
}
