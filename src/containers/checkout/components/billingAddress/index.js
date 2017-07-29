import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  FirstName,
  LastName,
  Email,
  AddressLine,
  Country,
  PrefectureState,
  PostalCode,
  City,
} from './component.imports';

const { string, func } = PropTypes;

class BillingAddress extends React.PureComponent {
  static propTypes = {
    billingFirstName: string.isRequired,
    billingLastName: string.isRequired,
    billingEmail: string.isRequired,
    billingAddressLine1: string.isRequired,
    billingAddressLine2: string.isRequired,
    billingCountry: string.isRequired,
    billingPrefectureState: string.isRequired,
    billingCity: string.isRequired,
    billingPostalCode: string.isRequired,
    handleOnChange: func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      billingFirstName: '',
      billingLastName: '',
      billingEmail: '',
      billingAddressLine1: '',
      billingAddressLine2: '',
      billingCountry: '',
      billingPrefectureState: '',
      billingCity: '',
      billingPostalCode: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    if (!_.isEqual(nextPropsCopy, this.props)) this.setState({ ...nextPropsCopy });
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    console.warn('BILLING IS RE-RENDERING');
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

        <Email
          billingEmail={this.state.billingEmail}
          handleOnChange={this.handleOnChange}
        />

        <AddressLine
          required
          lineNumber={1}
          billingAddressLine={this.state.billingAddressLine1}
          handleOnChange={this.handleOnChange}
        />

        <AddressLine
          lineNumber={2}
          billingAddressLine={this.state.billingAddressLine2}
          handleOnChange={this.handleOnChange}
        />

        <Country
          billingCountry={this.state.billingCountry}
          handleOnChange={this.handleOnChange}
        />

        <PrefectureState
          billingCountry={this.state.billingCountry}
          billingPrefectureState={this.state.billingPrefectureState}
          handleOnChange={this.handleOnChange}
        />

        <City
          billingCity={this.state.billingCity}
          handleOnChange={this.handleOnChange}
        />

        <PostalCode
          billingCountry={this.state.billingCountry}
          billingPostalCode={this.state.billingPostalCode}
          handleOnChange={this.handleOnChange}
        />


        {/* TODO: MVP2
            <SameAsBilling />
        */}
      </div>
    );
  }
}
export default BillingAddress;
