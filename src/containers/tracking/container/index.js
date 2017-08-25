import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import {
  FetchTrackingInfo,
} from '../../../graphql/queries';
import {
  BreadCrumb,
} from './component.imports';

class OrderTracking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: props.TrackingInfo.loading,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({ loading: nextProps.TrackingInfo.loading });
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
          if (state === orderStatus) {
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

  renderActivities = trackingInfo =>
    trackingInfo.map(({ date, activity, location }) => (
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

  renderHelper = (data) => {
    console.log('%cdata', 'background:lime;', data);
    const {
      shipDate,
      orderStatus,
      trackingNumber,
      userName,
      orderId,
      totalPaid,
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
            <span style={{ fontSize: 20 }}>Order Id#:</span>
            {'\u00A0'}{orderId}
          </p>
        </div>
        <div className="order-tracking__header">
          <p className="header__detail">
            <span style={{ fontSize: 20 }}>Total Paid:</span>
            {'\u00A0'}${'\u00A0'}{totalPaid}
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
  render() {
    const { TrackingInfo } = this.props;
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
        {
          this.state.loading ?
          (
            <h1 className="main__loading">
              <FontAwesome name="spinner" pulse size="3x" />
              <br />
              Loading...
            </h1>
          )
          :
          this.renderHelper(TrackingInfo.FetchTrackingInfo)
        }
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
