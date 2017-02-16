import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  juiceObj: PropTypes.objectOf(PropTypes.string),
};

function ProductCard({ juiceObj }) {
  const { title, price, nicotine_strengths, image_url } = juiceObj;

  const renderNicStrength = () =>
  nicotine_strengths.map(strength => (
    <li className={`homepage-juices-grid-card-desc-nicotine-options-${strength}`}>
      {strength}
    </li>
  ));

  return (
    <div className="homepage-juices-grid-card-parent">
      <img alt="" className="homepage-juices-grid-card-image" />
      <div className="homepage-juices-grid-card-desc-parent">
        <h4 className="homepage-juices-grid-card-desc-title">
          {title}
        </h4>
        <div className="homepage-juices-grid-card-desc-price">
          <h2 className="homepage-juices-grid-card-desc-price-title">
            <FontAwesome name="usd" />
            {`${price}.00` || ' 30.00'}
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
  );
}

ProductCard.propTypes = propTypes;
export default ProductCard;
