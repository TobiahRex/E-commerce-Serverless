import React from 'react';
import PropTypes from 'prop-types';

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
        <p>First Name</p>
        <input
          type="text"
          name="billingFirstName"
          onChange={this.handleOnChange}
          value={this.props.billingFirstName}
        />
      </div>
    );
  }
}
export default FirstName;
