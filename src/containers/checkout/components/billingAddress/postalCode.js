import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

const { func, string } = PropTypes;

class PostalCode extends React.PureComponent {
  static propTypes = {
    handleOnChange: func.isRequired,
    billingPostalCode: string,
    billingCountry: string.isRequired,
  }

  static defaultProps = {
    billingPostalCode: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      billingPostalCode: props.billingPostalCode,
    };
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
            name="billingPostalCode"
            validations={['required', 'numeric']}
            onChange={this.handleOnChange}
            value={this.props.billingPostalCode}
          />
        </div>
      </div>
    );
  }
}
export default PostalCode;
