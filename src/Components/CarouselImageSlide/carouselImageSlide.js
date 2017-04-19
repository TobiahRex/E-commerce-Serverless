import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  maxWidth: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function CarouselSlide({ maxWidth, className, name, description, alt }) {
  return (
    <div className={`${className}-${name}`}>
      <div
        alt={`${alt}`}
        className={`${className}-${name}-image`}
        style={{ maxWidth }}
      >

        <div className={`${className}-${name}-description-container`}>
          <p>
            {description}
          </p>
          <Link
            style={{ display: `${name === 'delivery' ? 'flex' : 'none'}` }}
            to="/juices"
            className={`${className}-${name}-buy-btn sweep-right`}
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
