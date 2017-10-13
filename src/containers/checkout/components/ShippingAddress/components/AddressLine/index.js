import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function AddressLine({
  type,
  line,
  title,
  disabled,
  required,
  addressLine,
  placeHolder,
  handleOnChange,
}) {
  const validations = [];
  if (required) validations.push('required');

  return (
    <div className={`kanji-section__container${disabled ? '-disabled' : ''}`}>
      <label className="form__label" htmlFor="Kanji-Address">
        {title}&nbsp;
      </label>
      <Validation.components.Input
        errorClassName="form__error-blurb"
        placeholder={placeHolder}
        disabled={disabled}
        containerClassName="container__text-field"
        type="text"
        name={`${type}AddressLine${line}`}
        validations={[...validations]}
        onChange={handleOnChange}
        value={addressLine}
      />
    </div>
  );
}
const AddressLineWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(AddressLine);

const { bool, string, func, number } = PropTypes;
AddressLine.propTypes = {
  line: number.isRequired,
  type: string.isRequired,
  title: string.isRequired,
  disabled: bool,
  required: bool.isRequired,
  addressLine: string.isRequired,
  placeHolder: string,
  handleOnChange: func,
};
AddressLine.defaultProps = {
  disabled: false,
  placeHolder: '',
  handleOnChange: null,
};
export default AddressLineWithLifecycle;
