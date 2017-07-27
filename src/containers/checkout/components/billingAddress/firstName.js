import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap/lib/';

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
        <FormGroup validationState={this.validate()}>
          <p>First Name <span className="required">*</span></p>

          <FormGroup>

        {/* <input
          type="text"
          name="billingFirstName"
          onChange={this.handleOnChange}
          value={this.props.billingFirstName}
          required
        /> */}
      </div>
    );
  }
}
export default FirstName;
