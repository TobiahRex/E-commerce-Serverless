import React, { PureComponent } from 'react';

class Email extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleChange = e => this.setState({ email: e.target.value })

  render() {
    return (
      <div className="input__row--email">
        <p>Email <span className="required">*</span></p>
        <input
          name="email"
          type="text"
          onChange={this.handleChange}
          value={this.state.email}
        />
      </div>
    );
  }
}
export default Email;
