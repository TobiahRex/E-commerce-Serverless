import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class LastName extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    billingLastName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      billingLastName: props.billingLastName,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row--last-name">
        <p>Last Name <span className="required">*</span></p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          name="billingLastName"
          validations={['required', 'alpha']}
          onChange={this.handleOnChange}
          value={this.props.billingLastName}
        />
      </div>
    );
  }
}
export default LastName;
