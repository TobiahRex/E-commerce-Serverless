import React, { PureComponent } from 'react';

class NameOnCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      nameOnCard: '',
    };
  }

  handleInputChange = e => this.setState({ nameOnCard: e.target.value })

  render() {
    return (
      <div className="input__row">
        <div className="input__row--name-on-card">
          <p>Name on Card <span className="required">*</span></p>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.nameOnCard}
          />
        </div>
      </div>
    );
  }
}
export default NameOnCard;
