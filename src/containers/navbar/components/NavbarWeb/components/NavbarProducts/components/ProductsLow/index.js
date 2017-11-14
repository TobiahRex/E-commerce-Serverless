import React from 'react';
import PropTypes from 'prop-types';
import {
  RecommendBtn,
  PromotionBtn,
} from './components';

function ProductsLow({ routerPush }) {
  return (
    <div className="floating-juice-container__bottom-section">
      <RecommendBtn routerPush={routerPush} />
      <PromotionBtn routerPush={routerPush} />
    </div>
  );
}
ProductsLow.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default ProductsLow;
