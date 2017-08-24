import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
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
  render() {
    console.log('%cthis.props', 'background:red;', this.props);
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
        <div className="order-tracking__header">
          <h4>Shipped Date: {Date.now()}</h4>
          <h4>Tracking #: 123123123123</h4>
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
                  <p>(YYYYMMDD)</p>
                </td>
                <td className="header--activity">
                  <h3>Activity</h3>
                </td>
              </tr>
            </thead>
            <tbody className="table__body">
              {/* NOTE: Table row needs to be dynamically generated. */}
              <tr className="body--row">
                <td className="body--location">
                  <p>Los Angeles, CA</p>
                </td>
                <td className="body--date">
                  <p>20171017</p>
                </td>
                <td className="body--activity">
                  <p>Arrived at Transit Point</p>
                </td>
              </tr>
              <tr className="body--row">
                <td className="body--location">
                  <p>Tokyo, Japan</p>
                </td>
                <td className="body--date">
                  <p>20171017</p>
                </td>
                <td className="body--activity">
                  <p>Arrived</p>
                </td>
              </tr>
              <tr className="body--row">
                <td className="body--location">
                  <p>Kansai, Japan</p>
                </td>
                <td className="body--date">
                  <p>20171017</p>
                </td>
                <td className="body--activity">
                  <p>Arrived At Destination</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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


OrderTracking.propTypes = {
  TrackingInfo: PropTypes.objectOf(any),
}

export default OrderTrackingWithStateAndData;
