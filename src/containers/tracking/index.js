import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import {
  FetchTrackingInfo,
} from '../../graphql/queries';
import {
  BreadCrumb,
} from './components';

class OrderTracking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: props.TrackingInfo.loading,
      error: {
        hard: false,
        soft: false,
        message: '',
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      const {
        TrackingInfo: {
          FetchTrackingInfo: {
            error,
          },
          loading,
        },
      } = nextProps;
      this.setState({
        loading,
        error: {
          hard: error.hard,
          soft: error.soft,
          message: error.message,
        },
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    /**
    * Function: "isArrayEqual"
    * 1) Uses lodash to determine if an array of nested values are different between nextProps "np" & this.props "tp".
    *
    * @param {object} np - nextProps
    * @param {object} tp - this.props
    *
    * @return {boolean} true/false.
    */

    if (!_.isEqual(nextProps, this.props)) return true;

    // if (!_.isEqual(nextState, this.state)) return true;

    return false;
  }

  renderStatus = (orderStatus) => {
    const states = ['Packaging', 'Shipped', 'Delivered'];
    return states.map((state) => {
      let className = '';
      /*  eslint-disable no-lone-blocks */
      switch (state) {
        case 'Packaging': {
          className = orderStatus === 'Packaging' ? 'active' : 'past';
        } break;
        case 'Shipped': {
          if (orderStatus === 'Shipped') {
            className = 'active';
          } else if (orderStatus === 'Packaging') {
            className = 'future';
          } else {
            className = 'past';
          }
        } break;
        case 'Delivered': {
          className = orderStatus === 'Delivered' ? 'active' : 'future';
        } break;
        default: break;
      }
      /*  eslint-enable no-lone-blocks */

      return (
        <li
          key={new Buffer(state, 'utf8').toString('base64')}
          className={`list--option option-${className}`}
        >
          <div>
            <p>{state}</p>
          </div>
        </li>
      );
    });
  }

  renderActivities = (trackingInfo) => {
    if (!trackingInfo[0].activity) {
      return (
        <tr className="body--row" key={new Buffer('no activity to report', 'utf8').toString('base64')}>

          <td className="body--location" />

          <td className="body--date">
            <p>No Activity To Report</p>
          </td>

          <td className="body--activity" />
        </tr>
      );
    }
    return trackingInfo.map(({ date, activity, location }) => (
      <tr className="body--row" key={new Buffer(`${location}${date}${activity}`, 'utf8').toString('base64')}>

        <td className="body--location">
          <p>{location}</p>
        </td>

        <td className="body--date">
          <p>{date}</p>
        </td>

        <td className="body--activity">
          <p>{activity}</p>
        </td>
      </tr>
    ));
  }

  renderHelper = (data) => {
    const {
      shipDate,
      orderStatus,
      trackingNumber,
      userName,
      orderId,
      totalPaid,
      totalCurrency,
      trackingInfo,
    } = data;
    return (
      <div>
        <div className="order-tracking__header">
          <p className="header__detail">
            <span style={{ fontSize: 20 }}>Ship Date:</span>
            {'\u00A0'}{shipDate}
          </p>
          <p className="header__detail">
            <span style={{ fontSize: 20 }}>Tracking #:</span>
            {'\u00A0'}{trackingNumber}
          </p>
        </div>
        <div className="order-tracking__header">
          <p className="header__detail">
            <span style={{ fontSize: 20 }}>User Name:</span>
            {'\u00A0'}{userName}
          </p>
          <p className="header__detail">
            <span style={{ fontSize: 20 }}>Order #:</span>
            {'\u00A0'}{orderId}
          </p>
        </div>
        <div className="order-tracking__header">
          <p className="header__detail">
            <span style={{ fontSize: 20 }}>Total Paid:</span>
            {'\u00A0'}
            <div className="header__detail-total">
              <FontAwesome name={totalCurrency.toLowerCase()} />
              {'\u00A0'}
              <p>
                {
                  totalCurrency === 'JPY' ? totalPaid : `${String(totalPaid).slice(0, 2)}.${String(totalPaid).slice(2, 4)}`
                }
              </p>
            </div>
          </p>
        </div>

        {/* NOTE: The background-colors for borders need to be dynamically created. */}
        <div className="order-tracking__status-bar">
          <ul className="status-bar--list">
            {this.renderStatus(orderStatus)}
          </ul>
        </div>

        <div className="order-tracking__latest-activity">
          <table className="activity--table">
            <thead className="table__header">
              <tr className="header-row">
                <td className="header--location">
                  <h3>Location</h3>
                </td>
                <td className="header--date">
                  <h3>Date</h3>
                </td>
                <td className="header--activity">
                  <h3>Activity</h3>
                </td>
              </tr>
            </thead>
            <tbody className="table__body">
              {/* NOTE: Table row needs to be dynamically generated. */}

              {this.renderActivities(trackingInfo)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  handleRender = ({ error }, props) => {
    if (error.hard || error.soft) {
      return (
        <h2 className="tracking__error">
          <FontAwesome name="exclamation" size="3x" />
          <br />
          {error.message}
        </h2>
      );
    }

    if (props.TrackingInfo.loading) {
      return (
        <h1 className="tracking__loading">
          <FontAwesome name="spinner" pulse size="3x" />
          <br />
          Loading...
          {error.message}
        </h1>
      );
    }

    return this.renderHelper(this.props.TrackingInfo.FetchTrackingInfo);
  }

  render() {
    return (
      <div className="order-tracking">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="Express Checkout"
        />
        <div className="tracking__title">
          <h1>Order Tracking</h1>
        </div>
        { this.handleRender(this.state, this.props) }
      </div>
    );
  }
}

const OrderTrackingWithData = graphql(
  FetchTrackingInfo, {
    name: 'TrackingInfo',
    options: ({ queryParams }) => {
      const token = queryParams.token ? queryParams.token : '';
      return ({
        variables: { token },
      });
    },
  },
)(OrderTracking);

const OrderTrackingWithStateAndData = connect(({ routing }) => ({
  queryParams: routing.locationBeforeTransitions.query,
}))(OrderTrackingWithData);

const { objectOf, any } = PropTypes;
OrderTracking.propTypes = {
  TrackingInfo: objectOf(any).isRequired,
};

export default OrderTrackingWithStateAndData;
