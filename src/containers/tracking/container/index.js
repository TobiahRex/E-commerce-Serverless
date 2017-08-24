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
      loading: null,
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

  renderHelper = (trackingInfo) => {
    const {
      FetchTrackingInfo: {
        shipDate,
        orderStatus,
        trackingNumber,
        userName,
        orderId,
        totalPaid,
        trackingInfo,
      },
    } = trackingInfo;
    return (
      <div>
        <div className="order-tracking__header">
          <h4>Shipped Date: {shipDate}</h4>
          <h4>Tracking #: {trackingNumber}</h4>
        </div>

        {/* NOTE: The background-colors for borders need to be dynamically created. */}
        <div className="order-tracking__status-bar">
          <ul className="status-bar--list">
            <li className="list--option">
              <div>
                <p>Packaging</p>
              </div>
            </li>
            <li className="list--option">
              <div>
                <p>Shipped</p>
              </div>
            </li>
            <li className="list--option">
              <div>
                <p>Delivered</p>
              </div>
            </li>
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
                  <p style={{ fontSize: '12px' }}>(YYYYMMDD)</p>
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
    const {
      TrackingInfo,
    } = this.props;

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
          TrackingInfo.loading ?
          (
            <h1 className="main__loading">
              <FontAwesome name="spinner" pulse size="3x" />
              <br />
              Loading...
            </h1>
          )
          :
          this.renderHelper(TrackingInfo)
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
