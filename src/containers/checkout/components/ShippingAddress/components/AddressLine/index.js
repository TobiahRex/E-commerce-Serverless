import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function AddressLine({
  type,
  line,
  title,
  disabled,
  required,
  addressLine,
  placeHolder,
}) {
  const validations = [];
  if (required) validations.push('required');

  return (
    <div className="input__row">
      <div className={`input__row--address-line${disabled ? '-disabled' : ''}`}>
        <p>{title}&nbsp;
          {required && <span className="required">*</span>}
        </p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          placeholder={placeHolder}
          disabled={disabled}
          containerClassName=""
          type="text"
          name={`${type}AddressLine${line}`}
          validations={[...validations]}
          onChange={this.handleOnChange}
          value={addressLine}
        />
      </div>
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
