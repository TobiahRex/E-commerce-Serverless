import React, { PureComponent } from 'react';

class PostalCode extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      postalCode: '',
    };
  }

  handleChange = e => this.setState({ postalCode: e.target.value })

  render() {
    return (
      <div className="input__row">
        <div className="input__row--postal-code">
          <p>Postal Code <span className="required">*</span></p>
          <input
            name="postalCode"
            type="text"
            onChange={this.handleChange}
            value={this.state.postalCode}
          />
        </div>
      </div>
    );
  }
}
export default PostalCode;
