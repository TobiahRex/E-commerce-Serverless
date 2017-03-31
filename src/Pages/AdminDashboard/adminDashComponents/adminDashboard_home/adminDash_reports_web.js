import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminDashReportsWeb() {
  return (
    <div className="dashboard__reports">
      <div className="reports__title admin-dash__small-title">
        <h3>Reports</h3>
      </div>
      <div className="reports__body">
        <div className="body__header">
          <ul className="header--list center-lg">

            <li className="list--option">
              <div className="option--type center-lg">
                <div className="type__ddn--container">

                  <div className="type__ddn--readout center-lg">
                    <input type="text" className="readout--msg start-lg" disabled value="Sales" />
                    <button className="readout--btn sweep-right">
                      <span className="flex-btn-parent center-xs">
                        <FontAwesome name="angle-down" />
                      </span>
                    </button>
                  </div>

                  <div className="type__ddn--content center-xs">
                    <ul className="ddn--content__list">
                      {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
                      <li className="list--option sweep-right">
                        <p>Products</p>
                      </li>
                      <li className="list--option sweep-right">
                        <p>Members</p>
                      </li>
                      <li className="list--option sweep-right">
                        <p>Traffic</p>
                      </li>
                      <li className="list--option sweep-right">
                        <p>Sales</p>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </li>

            <li className="list--option">
              <div className="option--periodicty">
                <div className="periodicty__ddn--container">
                  <div className="periodicty__ddn--readout">
                    <input type="text" className="readout--msg" disabled value="Today (24hrs)" />
                    <button className="readout--btn sweep-right">
                      <span className="flex-btn-parent">
                        <FontAwesome name="angle-down" />
                      </span>
                    </button>
                  </div>
                  <div className="periodicity__ddn--content">
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
              <div className="option--file-output">
                <FontAwesome name="file-o" />
                {'\u00A0'}
                <span className="file-output__file-name">
                  20161225_Today_SalesReport.pdf
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="body__status-msg">
          <div className="status-msg__pre-generated ">
            <FontAwesome name="info-circle" />{'\u00A0'}
            <p>{'You\'ve'} selected a {'<Periodicity>'}, {'<TYPE>'} report.</p>
          </div>
          <div className="status-msg__generated ">
            <FontAwesome name="exclamation-circle" />{'\u00A0'}
            <p>Success!</p>
          </div>
        </div>
        <div className="body__action-section">
          <div className="action-section__generate">
            <button className="medium-size-btn sweep-right">
              Generate
            </button>
          </div>
          <div className="action-section__text">
            <button className="medium-size-btn sweep-right">
              Text Report
            </button>
          </div>
          <div className="action-section__email">
            <button className="medium-size-btn sweep-right">
              Email
            </button>
          </div>
          <div className="action-section__download">
            <button className="medium-size-btn sweep-right">
              Download
            </button>
          </div>
        </div>
      </div>

      <div className="reports__modal">
        <div className="modal__msg--container">
          <div className="msg__email">
            <div className="email__input--container">
              <p>This report will be sent via email attachment to the following email...</p>
              <div className="emai__input">
                <label htmlFor="email-input">Email</label>
                <input type="email" id="email-input" value="admin@nj2jp.com" />
              </div>
              <div className="email__action-btns">
                <button className="primary-button sweep-right">Cancel</button>
                <button className="primary-button sweep-right">Send Email</button>
              </div>
            </div>
            <div className="email__sent">
              <p>Report sent via email attaachment to...</p>
              <br />
              <p>{'<email address here>'}</p>
              <div className="email__action-btns">
                <button className="primary-button sweep-right">OK</button>
              </div>
            </div>
          </div>
          <div className="msg__text">
            <div className="email__input--container">
              <p>This report will be sent via SMS Message (Text) to the following number...</p>
              <div className="emai__input">
                <label htmlFor="cell-input">Cell Number</label>
                <div className="cell-input__flag--container">
                  <div className="flag--readout">
                    <img src="../Images/nihongo-flag.png" alt="Japanese Flag" />
                  </div>
                  <div className="flag--ddn-content">
                    <img src="../Images/english-flag.png" alt="US Flag" />
                  </div>
                </div>

                <input type="email" value="+81" disabled />
                <input type="email" value="+1" disabled style={{ display: 'none' }} />
                <input type="phone" value="(808)-3918-8013" />
              </div>
              <div className="email__action-btns">
                <button className="primary-button sweep-right">Cancel</button>
                <button className="primary-button sweep-right">Send SMS</button>
              </div>
            </div>
            <div className="text__sent">
              <p>Report sent via SMS to...</p>
              <br />
              <p>{'<cell number here>'}</p>
              <div className="email__action-btns">
                <button className="primary-button sweep-right">OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AdminDashReportsWeb.propTypes = propTypes;
export default AdminDashReportsWeb;
