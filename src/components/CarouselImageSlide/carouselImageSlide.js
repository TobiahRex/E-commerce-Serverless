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
    <div className={`${className}__${name}`}>
      <div
        alt={`${alt}`}
        className={`${name}__image`}
        style={{ maxWidth }}
      >

        <div className={`${name}__description--container`}>
          <p>
            {description}
          </p>
          <Link
            to="/juices"
            className={`${name}__btn--buy sweep-right`}
            style={{ display: `${name === 'delivery' ? 'flex' : 'none'}` }}
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
