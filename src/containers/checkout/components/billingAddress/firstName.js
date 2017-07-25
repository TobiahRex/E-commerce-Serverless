import React, { PureComponent } from 'react';

class FirstName extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
    };
  }

  handleChange = e => this.setState({ firstName: e.target.value })

  render() {
    return (
      <div className="input__row--first-name">
        <p>First Name</p>
        <input
          name="firstName"``
          type="text"
          onChange={this.handleChange}
          value={this.state.firstName}
        />
      </div>
    );
  }
}
export default FirstName;
