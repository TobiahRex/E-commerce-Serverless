import React from 'react';
import validator from 'validator';
import Validation from 'react-validation';

Object.assign(Validation.rules, {
  api: {
    hint: value => (
      <button className="form-error is-visible">
        API Error on {`"${value}"`} value. Focus to hide.
      </button>
    ),
  },

  required: {
    rule: value => value.toString().trim(),
    hint: () => <span className="form-error is-visible">Required</span>,
  },

  email: {
    rule: value => validator.isEmail(value),
    hint: value => <span className="form-error is-visible">{value} is not an Email.</span>,
  },

  alpha: {
    rule: value => validator.isAlpha(value),
    hint: () => (
      <span className="form-error is-visible">
        String should contain only letters (a-zA-Z).
      </span>
    ),
  },

  numeric: {
    rule: value => validator.isNumeric(value),
    hint: () => (
      <span className="form-error is-visible">
        Postal code should only contain numbers (0-9).
      </span>
    ),
  },

  'us-zip': {
    rule: value => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        U.S. Zip Codes must be in (12345) or (12345-6789) format.
      </span>
    ),
  },

  'japan-postal': {
    rule: value => /(^\d{7}$)|(^\d{3}-\d{4}$)/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        Not a valid phone number.
      </span>
    ),
  },

  phone: {
    rule: value => validator.isMobilePhone(value, 'any'),
    hint: () => (
      <span className="form-error is-visible">
        not sure.
      </span>
    ),
  },

  city: {
    rule: value => validator.isAlpha(value, { min: 3, max: 20 }),
    hint: () => (
      <span className="form-error is-visible">
        That's not a valid city name.
      </span>
    ),
  }

  password: {
    rule: (value, components) => {
      const password = components.password.state;
      const passwordConfirm = components.passwordConfirm.state;
      const isBothUsed = password
      && passwordConfirm
      && password.isUsed
      && passwordConfirm.isUsed;
      const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

      if (!isBothUsed || !isBothChanged) {
        return true;
      }

      return password.value === passwordConfirm.value;
    },
    hint: () => <span className="form-error is-visible">Passwords should be equal.</span>,
  },
});
