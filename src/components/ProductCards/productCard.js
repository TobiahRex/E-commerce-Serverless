import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ProductCard({ juiceObj, className }) {
  console.log('%cjuiceObj', 'background:red;', juiceObj);

  const { title, price, nicotine_strengths, images } = juiceObj.product;

  const imageUrl = images
  .filter(({ purpose }) => purpose === 'card')
  .reduce(({ url }) => url);

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
        style={{ content: `url(${imageUrl})` }}
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
const { objectOf, string, any } = PropTypes;
const propTypes = {
  juiceObj: objectOf(any),
  className: string.isRequired,
};
const defaultProps = {
  juiceObj: {},
};
ProductCard.propTypes = propTypes;
ProductCard.defaultProps = defaultProps;
export default ProductCard;
