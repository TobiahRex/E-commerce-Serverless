import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const InputWithLabel = ({
  containerInfo,
  labelInfo,
  inputInfo,
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
        value={inputInfo.value}
      />

    </div>
  );
};

const { shape, string } = PropTypes;

InputWithLabel.propTypes = {
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
