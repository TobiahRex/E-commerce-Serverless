import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class FirstName extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    billingFirstName: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      billingFirstName: '',
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row--first-name">
        <p>First Name <span className="required">*</span></p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          name="billingFirstName"
          validations={['required', 'alpha']}
          onChange={this.handleOnChange}
          value={this.props.billingFirstName}
        />
      </div>
    );
  }
}
export default FirstName;
