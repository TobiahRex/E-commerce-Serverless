import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function OpenOrders() {
  return (
    <div className="dashboard__open-orders">
      <div className="dashboard__filter">
        {/* TODO: These 3 element will be rendered dynamically. */}
        <div className="filter__results-msg">
          <p className="result-msg--number">99</p>
          <p className="results-msg--periodcity">Open Order(s)</p>
          <p className="results-msg--rest">placed in the last</p>
        </div>
        <div className="filter__periodcity-ddn--container">
          <div className="periodicity__ddn--readout">
            <input type="text" className="readout--msg" disabled value="Month" />
            <button className="readout--btn sweep-right">
              <FontAwesome name="angle-down" />
            </button>
          </div>
          <div className="periodicity__ddn--content" style={{ display: 'none' }} >
            <ul className="ddn--content__list">
              {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
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
                <p>Year</p>
              </li>
              <li className="list--option sweep-right">
                <p>All</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dashboard__results-table">
        <div className="dashboard__product-image">
          <img src="../Images/nj2jp_juice_card_klp.png" alt="" className="product--img" />
        </div>
      </div>
    </div>
  );
}
OpenOrders.propTypes = propTypes;
export default OpenOrders;
