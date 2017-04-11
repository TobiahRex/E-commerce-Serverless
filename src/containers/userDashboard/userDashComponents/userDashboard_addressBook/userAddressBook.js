import React, { PropTypes } from 'react';
import 'react-router';
import FontAwesome from 'react-fontawesome';
import Breadcrumb from '../../../../components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function UserAddressBook({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="address-book--main">
      <div className="address-book--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Address Book"
        />
        <UserWelcomeMsg />
        <div className="address-book__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="dashboard--title">
                <h1>Address Book</h1>
              </div>

              <div className="address__form--container">
                <div className="address__left--container">
                  <div className="options__shipping-address">
                    <label htmlFor="shipping--options">Shipping Address Type</label>
                    <div className="options__ddn--container" id="shipping--options">
                      <div className="ddn__readout">
                        <input type="text" className="readout--display" value="Japanese" disabled />
                        <button className="readout--btn sweep-right">
                          <FontAwesome name="angle-down" />
                        </button>
                      </div>
                      <div className="ddn__content" style={{ display: 'none' }}>
                        <ul className="content--list">
                          <li className="list--option sweep-right">
                            US / Military
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="left--title userdashboard__small-title">
                    <h3>Shipping Address</h3>
                  </div>

                  <div className="usa" style={{ display: 'none' }}>
                    <div className="usa__country">
                      <label htmlFor="country__input">Country{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" value="UNITED STATES" className="contry__input" disabled />
                    </div>
                    <div className="usa__street">
                      <label htmlFor="street__input-alpha">Street Address{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="street__input-alpha" />
                      <input type="text" className="street__input-beta" />
                    </div>
                    <div className="usa__state">
                      <label htmlFor="state__input">State{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="state__input" />
                    </div>
                    <div className="usa__city">
                      <label htmlFor="city__input">City{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="city__input" />
                    </div>
                    <div className="usa__zip">
                      <label htmlFor="zip__input">Zip Code{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="zip__input" />
                    </div>
                  </div>

                  <div className="japan">
                    <div className="japan__country">
                      <label htmlFor="country__input">Country{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" value="JAPAN" className="contry__input" disabled />
                    </div>
                    <div className="japan__postal">
                      <label htmlFor="postal__input">Postal Code{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="postal__input" />
                    </div>
                    <div className="japan__prefecture">
                      <label htmlFor="prefecture__input">Prefecture{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="prefecture__input" />
                    </div>
                    <div className="japan__ward">
                      <label htmlFor="ward__input">Ward{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="ward__input" />
                    </div>
                    <div className="japan__city">
                      <label htmlFor="city__input">City{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="city__input" />
                    </div>
                    <div className="japan__street">
                      <label htmlFor="street__input">Street Address{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="street__input" />
                    </div>
                  </div>

                </div>

                <div className="address__right--container">
                  <div className="options__billing-address">
                    <label htmlFor="billing-address-type">Billing Address Type</label>
                    <div className="options__ddn--container" id="billing-address-type">
                      <div className="ddn__readout">
                        <input type="text"  className="readout--display" value="US / Military" disabled />
                        <button className="readout--btn sweep-right">
                          <FontAwesome name="angle-down" />
                        </button>
                      </div>
                      <div className="ddn__content" style={{ display: 'none' }}>
                        <ul className="content--list">
                          <li className="list--option">Japanese</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="right--title userdashboard__small-title">
                    <h3>Billing Address</h3>
                  </div>

                  <div className="usa">
                    <div className="usa__country">
                      <label htmlFor="country__input">Country{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" value="UNITED STATES" className="contry__input" disabled />
                    </div>
                    <div className="usa__street">
                      <label htmlFor="street__input-alpha">Street Address{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="street__input-alpha" />
                      <input type="text" className="street__input-beta" />
                    </div>
                    <div className="usa__state">
                      <label htmlFor="state__input">State{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="state__input" />
                    </div>
                    <div className="usa__city">
                      <label htmlFor="city__input">City{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="city__input" />
                    </div>
                    <div className="usa__zip">
                      <label htmlFor="zip__input">Zip Code{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="zip__input" />
                    </div>
                  </div>

                  <div className="japan" style={{ display: 'none' }}>
                    <div className="japan__country">
                      <label htmlFor="country__input">Country{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" value="JAPAN" className="contry__input" disabled />
                    </div>
                    <div className="japan__postal">
                      <label htmlFor="postal__input">Postal Code{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="postal__input" />
                    </div>
                    <div className="japan__prefecture">
                      <label htmlFor="prefecture__input">Prefecture{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="prefecture__input" />
                    </div>
                    <div className="japan__ward">
                      <label htmlFor="ward__input">Ward{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="ward__input" />
                    </div>
                    <div className="japan__city">
                      <label htmlFor="city__input">City{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="city__input" />
                    </div>
                    <div className="japan__street">
                      <label htmlFor="street__input">Street Address{'\u00A0'}
                        <span className="required">*</span>
                      </label>
                      <input type="text" className="street__input" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="address__address-same--container">
                <p className="required">Required Fields <span className="required">*</span>
                </p>
                <div className="address-same__input">
                  <button className="input-btn">
                    <FontAwesome name="plus" />
                  </button>
                  <p>Billing Address is Same as Shipping Address</p>
                </div>
              </div>

              <div className="address__action-section--container">
                <div className="action-section__back-btn">
                  <button className="back-btn primary-flex-button sweep-right">
                    <span className="flex-parent-btn">
                      <FontAwesome name="angle-double-left" />
                      {'\u00A0'}
                      Back
                    </span>
                  </button>
                </div>


                <div className="action-section__save-btn">
                  <button className="save-btn primary-flex-button sweep-right">
                    Save Addresses
                  </button>
                </div>
                <div>
                  <button className="save-btn primary-flex-button-saving sweep-right">
                    <FontAwesome name="refresh" spin />
                    {'\u00A0'} Saving...
                  </button>
                </div>
                <div>
                  <button className="save-btn primary-flex-button-saved sweep-right">
                    <span className="flex-parent-btn">
                      <FontAwesome name="check-circle" />
                      {'\u00A0'} Saved!
                    </span>
                  </button>
                </div>
              </div>

            </div>
            {/* End of Container */}
          </div>
        </div>
      </div>
    </div>
  );
}
UserAddressBook.propTypes = propTypes;
export default UserAddressBook;
