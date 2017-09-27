import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

const InputWithLabel = ({
  label,
  value,
  labelInfo,
  inputInfo,
  placeholder,
  containerInfo,
  handleOnChange,
}) => {
  let validations = [];

  if (inputInfo.name === 'emailAddress') validations = ['required', 'email'];
  if (inputInfo.name === 'name') validations = ['required', 'contactUsName', 'contactUs-firstLast'];

  return (
    <div className={containerInfo.className}>

      <label
        className={labelInfo.className}
        htmlFor={labelInfo.htmlFor}
      >{label}</label>

      <Validation.components.Input
        errorClassName="is-invalid-input"
        type={inputInfo.type}
        className={inputInfo.className}
        value={value}
        name={inputInfo.name}
        onChange={handleOnChange}
        validations={[...validations]}
        placeholder={placeholder}
      />

    </div>
  );
};

const { shape, string, func } = PropTypes;

InputWithLabel.propTypes = {
  label: string.isRequired,
  handleOnChange: func.isRequired,
  value: string.isRequired,
  placeholder: string.isRequired,
  containerInfo: shape({
    className: string,
  }).isRequired,
  labelInfo: shape({
    className: string,
    htmlFor: string,
    label: string,
  }).isRequired,
  inputInfo: shape({
    className: string,
    dataName: string,
    id: string,
    name: string,
    placeholder: string,
    type: string,
  }).isRequired,
};

export default InputWithLabel;
