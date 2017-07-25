import React, { PureComponent } from 'react';

class LastName extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      lastName: '',
    };
  }

  handleChange = e => this.setState({ lastName: e.target.value })

  render() {
    return (
      <div className="input__row--last-name">
        <p>Last Name</p>
        <input
          name="lastName"
          type="text"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default LastName;
