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

  boolRequired: {
    rule: value => Boolean(value),
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
        Japanese postal codes must be in format (123-4567) or (1234567) only.
      </span>
    ),
  },

  'phone-japanLength': {
    rule: (value) => {
      const validPhone = /(^\d{11}$)/.test(value);
      const minLength = value.length === 11;
      return (validPhone && minLength);
    },
    hint: () => (
      <span className="form-error is-visible">
        Not a valid phone number. Acceptable Format: {'\"01234567890\"'}
      </span>
    ),
  },

  'phone-startWithZero': {
    rule: value => (value[0] === '0'),
    hint: () => (
      <span className="form-error is-visible">
        Phone number should start with {'\"0\"'}.
      </span>
    ),
  },

  city: {
    rule: value => validator.isLength(value, { min: 3, max: 20 }),
    hint: () => (
      <span className="form-error is-visible">
        Not a valid city name.
      </span>
    ),
  },

  ccName: {
    rule: value => /^[a-zA-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(value),
    hint: () => (
      <span className="form-error is-visible">
        That name uses invalid characters. Please try again.
      </span>
    ),
  },

  'ccName-firstLast': {
    rule: value => /^[a-zA-Z]+\s[a-zA-Z]+$/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        You must include a First name & a Last name.
      </span>
    ),
  },

  ccNumber: {
    rule: value => /(^\d{16}$)|(^\d{4}-\d{4}-\d{4}-\d{4}$)/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        Credit Card numbers must be 16 digits & can only have format (1234567891234567) or (1234-5678-9123-4567).
      </span>
    ),
  },

  ccCvn: {
    rule: value => /(^\d{3}$)/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        Credit Card CVN numbers should only be 3 digits.
      </span>
    ),
  },

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
    hint: () => (
      <span className="form-error is-visible">Passwords should be equal.</span>
    ),
  },
});
