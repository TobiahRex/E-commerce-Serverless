import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  FirstName,
  LastName,
  Email,
  AddressLine,
  Country,
  PrefectureState,
  PostalCode,
  City,
  PhoneNumber,
} from './component.imports';

class BillingAddress extends PureComponent {
  static propTypes = {
    country: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      country: '',
    };
  }

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div className="checkout__billing">
        <div className="title">
          <h3>Billing Address</h3>
        </div>
        <div className="input__row">
          <FirstName />
          <LastName />
        </div>

        <Email />

        <AddressLine lineNumber={1} />

        <AddressLine lineNumber={2} />

        <Country
          handleOnChange={this.handleOnChange} country={this.state.country}
        />

        <PrefectureState country={this.state.country} />

        <PostalCode />

        <City />

        <PhoneNumber />

        {/* TODO: MVP2
          <SameAsBilling />
        */}
      </div>
    );
  }
}
export default BillingAddress;
