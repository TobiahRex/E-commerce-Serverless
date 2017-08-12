import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

const { func, string } = PropTypes;

class PostalCode extends React.Component {
  static propTypes = {
    apiError: string,
    handleOnChange: func.isRequired,
    shippingPostalCode: string,
    SgValidatePostal: func.isRequired,
  }

  static defaultProps = {
    apiError: '',
    shippingPostalCode: '',
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--postal-code">
          <p>Postal Code <span className="required">*</span></p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="shippingPostalCode"
            validations={['required', 'japan-postal']}
            onChange={this.handleOnChange}
            onBlur={this.validatePostal}
            value={this.props.shippingPostalCode}
          />
        </div>
      </div>
    );
  }
}

export default PostalCode;
