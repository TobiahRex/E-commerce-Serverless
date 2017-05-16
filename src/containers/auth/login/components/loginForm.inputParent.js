import React from 'react';
import PropTypes from 'prop-types';
import LoginFormInput from './loginForm.input';

function LoginFormInputParent({ onInputChange, value, slug, type }) {
  const titleSlug = slug[0].toUpperCase() + slug.slice(1);
  return (
    <div className={`form--${slug}`}>
      <label htmlFor="email" className={`${slug}__input--label`}>
        {titleSlug}{'\u00A0'}
        <span className="required-star">*</span>
      </label>
      <LoginFormInput
        onInputChange={onInputChange}
        className={`${slug}__input--${slug}`}
        slug={slug}
        type={type}
        value={value}
      />
    </div>
  );
}
const { string, func } = PropTypes;
const propTypes = {
  onInputChange: func.isRequired,
  value: string.isRequired,
  slug: string.isRequired,
  type: string.isRequired,
};
LoginFormInputParent.propTypes = propTypes;
export default LoginFormInputParent;
