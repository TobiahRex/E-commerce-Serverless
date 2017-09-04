import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const InputWithLabel = ({
  value,
  labelInfo,
  inputInfo,
  containerInfo,
  handleOnChange,
}) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className={containerInfo.className}>

      <label
        className={labelInfo.className}
        htmlFor={labelInfo.htmlFor}
      >{labelInfo.label}</label>

      <input
        className={inputInfo.className}
        data-name={inputInfo.dataName}
        id={inputInfo.id}
        maxLength="256"
        name={inputInfo.name}
        placeholder={inputInfo.placeholder}
        type={inputInfo.type}
        value={value}
        onChange={handleOnChange}
      />

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
