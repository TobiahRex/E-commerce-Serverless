import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  juiceObj: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string.isRequired,
};

function ProductCard({ juiceObj, className }) {
  const { title, price, nicotine_strengths, image_url } = juiceObj;

  const renderNicOptions = () =>
  nicotine_strengths.map(strength => (
    <li
      key={`card-${strength}`}
      className={`homepage-juices-grid-card-desc-nicotine-options-${strength}`}
    >{strength}</li>
  ));


  return (
    <div className={`${className}-parent`}>
      <img
        src={image_url}
        alt="Juice Card"
        className={`${className}-image`}
      />
      <div className={`${className}-desc-parent`}>
        <h4 className={`${className}-desc-title`}>
          {title}
        </h4>
        <div className={`${className}-desc-price`}>
          <h2 className={`${className}-desc-price-title`}>
            <FontAwesome name="usd" />
            {`${price}.00` || ' 30.00'}
          </h2>
          <p className={`${className}-desc-price-tax`}>+TAX</p>
        </div>
        <div className={`${className}-desc-shipping`}>
          <p>Free Shipping</p>
        </div>
        <div className={`${className}-desc-nicotine-title`}>
          Nicotine Strengths
        </div>
        <div className={`${className}-desc-nicotine-options`}>
          <ul className={`${className}-desc-nicotine-options-list`}>
            {renderNicOptions()}
          </ul>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = propTypes;
export default ProductCard;
