import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

const { string } = PropTypes;

const propTypes = {
  maxWidth: string.isRequired,
  className: string.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  alt: string.isRequired,
};

const juices = ['pina_colada', 'french_vanilla_mocha', 'strawberries_n_cream', 'fruity_bamm_bamm', 'papple_berry', 'key_lime_pie'];

function CarouselImageSlide({ maxWidth, className, name, description, alt }) {
  return (
    <div className={`${className}__${name}`}>
      <div
        alt={`${alt}`}
        className={`${name}__image`}
        style={{ maxWidth }}
      >

        <div className={`${name}__description--container`}>
          <p>
            <IntlMsg id={description} />
          </p>
          <Link
            to={`/juice/${juices[Math.floor(Math.random() * (juices.length - 1))]}`}
            className={`${name}__btn--buy sweep-right`}
            style={{ display: `${name === 'delivery' ? 'flex' : 'none'}` }}
          >
            <IntlMsg id="home.how.delivery.desc.buyNow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

CarouselImageSlide.propTypes = propTypes;
export default CarouselImageSlide;

/* NOTE
1. className example = "homepage-how-carousel"
2. name exmaple = "couple"
 - Result = homepage-how-carousel-couple
*/
