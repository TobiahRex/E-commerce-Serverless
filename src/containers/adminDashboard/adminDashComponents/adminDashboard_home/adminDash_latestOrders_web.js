import React from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminDashLatestOrdersWeb() {
  return (
    <div className="dashboard__latest-orders">

      <div className="latest-orders__header">
        <ul className="header--list">
          <li className="list--option">
            <label htmlFor="last-order">Last Order</label>
            <div className="option--last-order" id="last-order">
              <p className="value">12</p>
              <p className="units">mins ago</p>
            </div>
          </li>
          <li className="list--option">
            <div className="option--revenue">
              <div className="revenue__ddn--container">
                <div className="revenue__ddn--readout">
                  <div className="ddn__options">
                    <label htmlFor="ddn__btn">Revenue</label>
                    <input type="text" id="ddn__btn" className="readout--msg" value="Today" disabled />
                    <button className="readout--btn sweep-right">
                      <span className="flex-btn-parent">
                        <FontAwesome name="angle-down" />
                      </span>
                    </button>
                  </div>
                  <div className="ddn__result">
                    <h3>
                      <FontAwesome name="usd" />{'\u00A0'}
                      1,200.00
                    </h3>
                  </div>
                </div>
                <div className="revenue__ddn--content">
                  <ul className="ddn--content__list">
                    {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
                    <li className="list--option sweep-right">
                      <p>Today (24hrs)</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Week</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Month</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Quarter</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Semi-Annual</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Annual</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Lifetime</p>
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </li>
          <li className="list--option">
            <div className="option--avg-sale">
              <div className="avg-sale__ddn--container">
                <div className="avg-sale__ddn--readout">
                  <div className="ddn__options">
                    <label htmlFor="ddn__btn">Avg. Sale</label>
                    <input type="text" id="ddn__btn" className="readout--msg" value="Today (24hrs)" disabled />
                    <button className="readout--btn sweep-right">
                      <span className="flex-btn-parent">
                        <FontAwesome name="angle-down" />
                      </span>
                    </button>
                  </div>
                  <div className="ddn__result">
                    <h3>99</h3>
                  </div>
                </div>
                <div className="avg-sale__ddn--content">
                  <ul className="ddn--content__list">
                    {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
                    <li className="list--option sweep-right">
                      <p>Today (24hrs)</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Week</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Month</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Quarter</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Semi-Annual</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Annual</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Lifetime</p>
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </li>
        </ul>
      </div>

      <div className="latest-orders__table">
        <table className="table--container">
          <thead className="table__header">
            <tr className="header--row">
              <th className="header--cell">
                <p>Order #</p>
              </th>
              <th className="header--cell">
                <p>Product</p>
              </th>
              <th className="header--cell">
                <p>Member Name</p>
              </th>
              <th className="header--cell">
                <p>New Member</p>
              </th>
              <th className="header--cell">
                <p>Total</p>
              </th>
            </tr>
          </thead>
          <tbody className="table__body ">
            <tr className="body__row">
              <td className="row--cell">
                <p>12312...</p>
              </td>
              <td className="row--cell">
                <p>Fruity Bamm Bamm | 6mg</p>
              </td>
              <td className="row--cell">
                <p>Bruce Wayne</p>
              </td>
              <td className="row--cell">
                <p>Yes</p>
              </td>
              <td className="row--cell">
                <p>
                  <FontAwesome name="usd" />{'\u00A0'}
                  134.23
                </p>
              </td>
            </tr>
            <tr className="body__row">
              <td className="row--cell">
                <p>45678...</p>
              </td>
              <td className="row--cell">
                <p>Strawberries {'N\''} Cream | 4mg</p>
              </td>
              <td className="row--cell">
                <p>GUEST</p>
              </td>
              <td className="row--cell">
                <p>-</p>
              </td>
              <td className="row--cell">
                <p>
                  <FontAwesome name="usd" />{'\u00A0'}
                  36.54
                </p>
              </td>
            </tr>
            <tr className="body__row">
              <td className="row--cell">
                <p>12312...</p>
              </td>
              <td className="row--cell">
                <p>Fruity Bamm Bamm | 6mg</p>
              </td>
              <td className="row--cell">
                <p>Bruce Wayne</p>
              </td>
              <td className="row--cell">
                <p>Yes</p>
              </td>
              <td className="row--cell">
                <p>
                  <FontAwesome name="usd" />{'\u00A0'}
                  134.23
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
AdminDashLatestOrdersWeb.propTypes = propTypes;
export default AdminDashLatestOrdersWeb;
