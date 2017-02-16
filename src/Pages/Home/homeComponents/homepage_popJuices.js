import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import JuiceCard from '../../../Components/ProductCards/productCard';

const price = null;
const juiceName = null;

class HomepagePopJuices extends PureComponent {
  static propTypes = {
    popJuices: PropTypes.arrayOf(PropTypes.object.isRequired),
  }

  renderJuiceCards = () =>
    this.props.popJuices.map((juiceObj, i) => (
      <JuiceCard key={`homepage-juices-grid-card-parent-${i}`} juiceObj={juiceObj} />
    )
  )

  render() {
    return (
      <div className="homepage-juices">
        <h1 className="homepage-juices-title">Popular Juices</h1>
        <div className="homepage-juices-grid-parent">
          {this.renderJuiceCards()}
          {/* <div className="homepage-juices-grid-card-parent">
            <img alt="" className="homepage-juices-grid-card-image" />
            <div className="homepage-juices-grid-card-desc-parent">
              <h4 className="homepage-juices-grid-card-desc-title">
                {juiceName || 'Strawberries N\' Cream'}
              </h4>
              <div className="homepage-juices-grid-card-desc-price">
                <h2 className="homepage-juices-grid-card-desc-price-title">
                  <FontAwesome name="usd" />
                  {price || ' 30.00'}
                </h2>
                <p className="homepage-juices-grid-card-desc-price-tax">+TAX</p>
              </div>
              <div className="homepage-juices-grid-card-desc-shipping">
                <p>Free Shipping</p>
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-title">
                Nicotine Strengths
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-options">
                <ul className="homepage-juices-grid-card-desc-nicotine-options-list">
                  <li className="homepage-juices-grid-card-desc-nicotine-options-2mg">
                    2mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-4mg">
                    4mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-6mg">
                    6mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-8mg">
                    8mg
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className="homepage-juices-grid-card-parent">
            <img alt="" className="homepage-juices-grid-card-image" />
            <div className="homepage-juices-grid-card-desc-parent">
              <h4 className="homepage-juices-grid-card-desc-title">
                {juiceName || 'Strawberries N\' Cream'}
              </h4>
              <div className="homepage-juices-grid-card-desc-price">
                <h2 className="homepage-juices-grid-card-desc-price-title">
                  <FontAwesome name="usd" />
                  {price || ' 30.00'}
                </h2>
                <p className="homepage-juices-grid-card-desc-price-tax">+TAX</p>
              </div>
              <div className="homepage-juices-grid-card-desc-shipping">
                <p>Free Shipping</p>
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-title">
                Nicotine Strengths
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-options">
                <ul className="homepage-juices-grid-card-desc-nicotine-options-list">
                  <li className="homepage-juices-grid-card-desc-nicotine-options-2mg">
                    2mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-4mg">
                    4mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-6mg">
                    6mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-8mg">
                    8mg
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className="homepage-juices-grid-card-parent">
            <img alt="" className="homepage-juices-grid-card-image" />
            <div className="homepage-juices-grid-card-desc-parent">
              <h4 className="homepage-juices-grid-card-desc-title">
                {juiceName || 'Strawberries N\' Cream'}
              </h4>
              <div className="homepage-juices-grid-card-desc-price">
                <h2 className="homepage-juices-grid-card-desc-price-title">
                  <FontAwesome name="usd" />
                  {price || ' 30.00'}
                </h2>
                <p className="homepage-juices-grid-card-desc-price-tax">+TAX</p>
              </div>
              <div className="homepage-juices-grid-card-desc-shipping">
                <p>Free Shipping</p>
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-title">
                Nicotine Strengths
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-options">
                <ul className="homepage-juices-grid-card-desc-nicotine-options-list">
                  <li className="homepage-juices-grid-card-desc-nicotine-options-2mg">
                    2mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-4mg">
                    4mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-6mg">
                    6mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-8mg">
                    8mg
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className="homepage-juices-grid-card-parent">
            <img alt="" className="homepage-juices-grid-card-image" />
            <div className="homepage-juices-grid-card-desc-parent">
              <h4 className="homepage-juices-grid-card-desc-title">
                {juiceName || 'Strawberries N\' Cream'}
              </h4>
              <div className="homepage-juices-grid-card-desc-price">
                <h2 className="homepage-juices-grid-card-desc-price-title">
                  <FontAwesome name="usd" />
                  {price || ' 30.00'}
                </h2>
                <p className="homepage-juices-grid-card-desc-price-tax">+TAX</p>
              </div>
              <div className="homepage-juices-grid-card-desc-shipping">
                <p>Free Shipping</p>
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-title">
                Nicotine Strengths
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-options">
                <ul className="homepage-juices-grid-card-desc-nicotine-options-list">
                  <li className="homepage-juices-grid-card-desc-nicotine-options-2mg">
                    2mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-4mg">
                    4mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-6mg">
                    6mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-8mg">
                    8mg
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className="homepage-juices-grid-card-parent">
            <img alt="" className="homepage-juices-grid-card-image" />
            <div className="homepage-juices-grid-card-desc-parent">
              <h4 className="homepage-juices-grid-card-desc-title">
                {juiceName || 'Strawberries N\' Cream'}
              </h4>
              <div className="homepage-juices-grid-card-desc-price">
                <h2 className="homepage-juices-grid-card-desc-price-title">
                  <FontAwesome name="usd" />
                  {price || ' 30.00'}
                </h2>
                <p className="homepage-juices-grid-card-desc-price-tax">+TAX</p>
              </div>
              <div className="homepage-juices-grid-card-desc-shipping">
                <p>Free Shipping</p>
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-title">
                Nicotine Strengths
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-options">
                <ul className="homepage-juices-grid-card-desc-nicotine-options-list">
                  <li className="homepage-juices-grid-card-desc-nicotine-options-2mg">
                    2mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-4mg">
                    4mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-6mg">
                    6mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-8mg">
                    8mg
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className="homepage-juices-grid-card-parent">
            <img alt="" className="homepage-juices-grid-card-image" />
            <div className="homepage-juices-grid-card-desc-parent">
              <h4 className="homepage-juices-grid-card-desc-title">
                {juiceName || 'Strawberries N\' Cream'}
              </h4>
              <div className="homepage-juices-grid-card-desc-price">
                <h2 className="homepage-juices-grid-card-desc-price-title">
                  <FontAwesome name="usd" />
                  {price || ' 30.00'}
                </h2>
                <span className="homepage-juices-grid-card-desc-price-tax"> +TAX
                </span>
              </div>
              <div className="homepage-juices-grid-card-desc-shipping">
                <p>Free Shipping</p>
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-title">
                Nicotine Strengths
              </div>
              <div className="homepage-juices-grid-card-desc-nicotine-options">
                <ul className="homepage-juices-grid-card-desc-nicotine-options-list">
                  <li className="homepage-juices-grid-card-desc-nicotine-options-2mg">
                    2mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-4mg">
                    4mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-6mg">
                    6mg
                  </li>
                  <li className="homepage-juices-grid-card-desc-nicotine-options-8mg">
                    8mg
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ homepage }) => ({
  popJuices: homepage.pop_juices,
});
export default connect(mapStateToProps, null)(HomepagePopJuices);
