import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { WebflowJs } from './assets/utils';

const InputWithLabel = ({
  value,
  labelInfo,
  inputInfo,
  containerInfo,
  handleOnChange,
}) => {
  WebflowJs(); //eslint-disable-line

  let validations;

  if (inputInfo.type === 'email') validations = ['required', 'email'];
  if (inputInfo.type === 'name') validations = ['required', 'alpha', 'ccName', 'ccName-firstLast'];

  return (
    <div className={containerInfo.className}>

      <label
        className={labelInfo.className}
        htmlFor={labelInfo.htmlFor}
      >{labelInfo.label}</label>

      <Validation.components.Input
        errorClassName="is-invalid-input"
        type={inputInfo.type}
        className={inputInfo.className}
        value={value}
        name={inputInfo.name}
        onChange={handleOnChange}
        validations={validations}
        placeholder={inputInfo.placeholder}
      />
      {/* <input
        className={inputInfo.className}
        data-name={inputInfo.dataName}
        id={inputInfo.id}
        maxLength="256"
        name={inputInfo.name}
        placeholder={inputInfo.placeholder}
        type={inputInfo.type}
        value={value}
        onChange={handleOnChange}
      /> */}

    </div>
  );
};

const { shape, string, func } = PropTypes;

InputWithLabel.propTypes = {
  handleOnChange: func.isRequired,
  value: string.isRequired,
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
