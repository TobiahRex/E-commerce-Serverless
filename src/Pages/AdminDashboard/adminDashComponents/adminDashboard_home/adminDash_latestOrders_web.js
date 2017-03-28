import React, { PropTypes } from 'react';
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
            <label htmlFor="last-order"></label>
            <div className="option--last-order" id="last-order">
              <p className="value">12</p>
              <p className="units"></p>
            </div>
          </li>
          <li className="list--option">
            <div className="option--visitors">
              <div className="visitors__ddn--container">
                <div className="visitors__ddn--readout">
                  <div className="ddn__options">
                    <label htmlFor="ddn__btn">Visitors Per</label>
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
                <div className="visitors__ddn--content">
                  <ul className="ddn--content__list">
                    {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
                    <li className="list--option sweep-right">
                      <p>Minute</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Hour</p>
                    </li>
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
            <div className="option--purchases">
              <div className="purchases__ddn--container">
                <div className="purchases__ddn--readout">
                  <div className="ddn__options">
                    <label htmlFor="ddn__btn">Purchases Per</label>
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
                <div className="purchases__ddn--content">
                  <ul className="ddn--content__list">
                    {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
                    <li className="list--option sweep-right">
                      <p>Minute</p>
                    </li>
                    <li className="list--option sweep-right">
                      <p>Hour</p>
                    </li>
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
    </div>
  );
}
AdminDashLatestOrdersWeb.propTypes = propTypes;
export default AdminDashLatestOrdersWeb;
