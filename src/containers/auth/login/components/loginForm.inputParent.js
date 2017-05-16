import React from 'react';
import LoginFormInput from './loginForm.input';

const propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

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
LoginFormInputParent.propTypes = propTypes;
export default LoginFormInputParent;
