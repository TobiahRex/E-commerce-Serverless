import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap/lib/';

const { func, string } = PropTypes;

class FirstName extends React.PureComponent {
  static propTypes = {
    handleOnChange: func.isRequired,
    billingFirstName: string.isRequired,
    validateInput: func.isRequired,
  }

  static validationInfo = {
    name: 'billingFirstName',
    vSuccess: 2,
    vWarning: 1,
    vError: 0,
  }
  constructor(props) {
    super(props);

    this.state = {
      billingFirstName: '',
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  validateState = infoObj => this.props.validateInput(infoObj)

  render() {
    return (
      <div className="input__row--first-name">
        <FormGroup validationState={this.validateState(FirstName.validationInfo)}>
          <p>First Name <span className="required">*</span></p>
          <FormControl
            name="billingFirstName"
            type="string"
            value={this.props.billingFirstName}
            onChange={this.props.handleOnChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </div>
    );
  }
}
export default FirstName;
