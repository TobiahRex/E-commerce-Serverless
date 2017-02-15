import React, { PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

function ReviewSlide({ className, name, review, author }) {
  return (
    <div className={`${className}-${name}`}>
      <div alt={`${alt}`} className={`${className}-${name}-review`}>
        <p className={`${className}-${name}-review-body`}>
          <p className={`${className}-${name}-review-body-quotes`}>
            {description}
          </p>
          <p className={`${className}-${name}-review-body-main`}>
            {description}
          </p>
          <p className={`${className}-${name}-review-body-quotes`}>
            {description}
          </p>
        </p>
          <Link
            style={{ display: `${name === 'delivery' ? 'flex' : 'none'}` }}
            to="/products"
            className={`${className}-${name}-buy-btn`}
          >Buy Now</Link>
        </div>
      </div>
    </div>
  );
}

CarouselSlide.propTypes = propTypes;
export default CarouselSlide;

/* NOTE
1. className example = "homepage-how-carousel"
2. name exmaple = "couple"
 - Result = homepage-how-carousel-couple
*/
