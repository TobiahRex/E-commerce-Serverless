import React from 'react';
import validator from 'validator';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';

Object.assign(Validation.rules, {
  api: {
    hint: () => (
      <button className="form-error is-visible">
        <IntlMsg id="form.validation.error.api" />
      </button>
    ),
  },

  required: {
    rule: value => value.toString().trim(),
    hint: () => <span className="form-error is-visible">
      <IntlMsg id="form.validation.error.required" />
    </span>,
  },

  boolRequired: {
    rule: value => Boolean(value),
    hint: () => <span className="form-error is-visible">
      <IntlMsg id="form.validation.error.bool.required" />
    </span>,
  },

  email: {
    rule: value => validator.isEmail(value),
    /* eslint-disable no-undef */
    hint: value => (
      <span className="form-error is-visible">
        {!!IntlMessages ? IntlMessages['form.validation.error.email'].replace(/EMAIL_VALUE/g, value) : ''}
      </span>
    ),
    /* eslint-enable no-undef */
  },

  alpha: {
    rule: value => validator.isAlpha(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.alpha" />
      </span>
    ),
  },

  numeric: {
    rule: value => validator.isNumeric(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.numeric" />
      </span>
    ),
  },

  'us-zip': {
    rule: value => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.us-zip" />
      </span>
    ),
  },

  'japan-postal': {
    rule: value => /(^\d{7}$)|(^\d{3}-\d{4}$)/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.postal" />
      </span>
    ),
  },

  'phone-japanLength': {
    rule: (value) => {
      const validPhone = /(^\d{10}$)|(^\d{11}$)/.test(value);
      const minLength = (value.length === 10) || (value.length === 11);
      return (validPhone && minLength);
    },
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.phone-japanLength" />
      </span>
    ),
  },

  'phone-startWithZero': {
    rule: value => (value[0] === '0'),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.phone-startWithZero" />
      </span>
    ),
  },

  city: {
    rule: value => validator.isLength(value, { min: 3, max: 20 }),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.city" />
      </span>
    ),
  },

  ccName: {
    rule: value => /^[a-zA-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.ccName" />
      </span>
    ),
  },

  'ccName-firstLast': {
    rule: value => /^[a-zA-Z]+\s[a-zA-Z]+$/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.ccName-firstLast" />
      </span>
    ),
  },

  contactUsName: {
    rule: value => /^[a-zA-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.contactUsName" />
      </span>
    ),
  },

  contactUsTextArea: {
    rule: value => /^[a-zA-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.contactUsTextArea" />
      </span>
    ),
  },

  'contactUs-firstLast': {
    rule: value => /^[a-zA-Z]+\s[a-zA-Z]+$/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="" />
      </span>
    ),
  },

  ccNumber: {
    rule: value => /(^\d{16}$)|(^\d{4}-\d{4}-\d{4}-\d{4}$)/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.ccNumber" />
      </span>
    ),
  },

  ccCvn: {
    rule: value => /(^\d{3}$)/.test(value),
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.ccCvn" />
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
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.password" />
      </span>
    ),
  },

  postalApi: {
    hint: () => (
      <span className="form-error is-visible">
        <IntlMsg id="form.validation.error.postalApi" />
      </span>
    ),
  },
});
