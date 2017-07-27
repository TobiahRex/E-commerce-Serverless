import React, { PureComponent } from 'react';

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
  constructor(props) {
    super(props);

    this.state = {
      billingFirstName: '',
      billingLastName: '',
      billingCountry: '',
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
          <FirstName
            billingFirstName={this.state.billingFirstName}
            handleOnChange={this.handleOnChange}
          />
          <LastName
            billingLastName={this.state.billingLastName}
            handleOnChange={this.handleOnChange}
          />
        </div>

        <Email />

        <AddressLine lineNumber={1} />

        <AddressLine lineNumber={2} />

        <Country
          handleOnChange={this.handleOnChange} billingCountry={this.state.billingCountry}
        />

        <PrefectureState billingCountry={this.state.billingCountry} />

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
