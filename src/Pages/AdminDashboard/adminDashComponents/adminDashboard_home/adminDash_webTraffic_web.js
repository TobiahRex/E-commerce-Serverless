import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminDashWebTrafficWeb() {
  return (
    <div className="dashboard__web-traffic">
      <div className="web-traffic__title admin-dash__small-title">
        <h3>Web Traffic</h3>
      </div>

      <div className="web-traffic__body">
        <div className="body__header">
          <ul className="header--list">
            <li className="list--option">
              <div className="option--periodicity">
                <div className="periodicity__ddn--container">
                  <div className="periodicity__ddn--readout">
                    <input type="text" className="readout--msg" disabled value="Today (24hrs)" />
                    <button className="readout--btn sweep-right">
                      <span className="flex-btn-parent center-xs middle-xs">
                        <FontAwesome name="angle-down" />
                      </span>
                    </button>
                  </div>
                  <div className="periodicity__ddn--content" style={{ display: 'none' }} >
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
                        <p>Semi Annual</p>
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
              <div className="option--visitors">
                <div className="visitors__ddn--container">
                  <div className="visitors__ddn--readout center-xs middle-xs">
                    <div className="ddn__options center-xs middle-xs">
                      <label htmlFor="ddn__btn">Visitors Per</label>
                      <input type="text" id="ddn__btn" className="readout--msg" value="Today (24hrs)" disabled />
                      <button className="readout--btn sweep-right">
                        <span className="flex-btn-parent center-xs middle-xs">
                          <FontAwesome name="angle-down" />
                        </span>
                      </button>
                    </div>
                    <div className="ddn__result">
                      <h3>99</h3>
                    </div>
                  </div>
                  <div className="visitors__ddn--content" style={{ display: 'none' }} >
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
                    <div className="ddn__options center-xs middle-xs ">
                      <label htmlFor="ddn__btn">Purchases Per</label>
                      <input type="text" id="ddn__btn" className="readout--msg" value="Today (24hrs)" disabled />
                      <button className="readout--btn sweep-right">
                        <span className="flex-btn-parent center-xs middle-xs">
                          <FontAwesome name="angle-down" />
                        </span>
                      </button>
                    </div>
                    <div className="ddn__result center-xs">
                      <h3>99</h3>
                    </div>
                  </div>
                  <div className="purchases__ddn--content" style={{ display: 'none' }} >
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
        <div className="body__main">
          <ul className="main--list">
            <li className="list--option">
              <div className="option--visits">
                <h4>230</h4>
                <p>Visits</p>
              </div>
            </li>
            <li className="list--option">
              <div className="option--bounce-rate">
                <h4>1%</h4>
                <p>Bounce Rate</p>
              </div>
            </li>
            <li className="list--option">
              <div className="option--new-visitors">
                <h4>55%</h4>
                <p>New Visitors</p>
              </div>
            </li>
            <li className="list--option">
              <div className="option--avg-visit-time">
                <h4>5 min</h4>
                <p>Avg. Visit Time</p>
              </div>
            </li>
            <li className="list--option">
              <div className="option--page-views">
                <h4>40,000</h4>
                <p>Page Views</p>
              </div>
            </li>
            <li className="list--option">
              <div className="option--mobile-views">
                <h4>60%</h4>
                <p>Mobile Views</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="body__map">
          <div className="map__google-heat-map">
            <img className="google-heat-map__img" src="../Images/world_heatmap.png" alt="World Heatmap" />
          </div>
        </div>
      </div>
    </div>
  );
}
AdminDashWebTrafficWeb.propTypes = propTypes;
export default AdminDashWebTrafficWeb;
