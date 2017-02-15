import React, { PropTypes } from 'react';

const propTypes = {
  handleClick: PropTypes.func.isRequired,
};

function CarouselDots({ handleClick }) {
  return (
    <div className="homepage-reviews-carousel-dots">
      <ul className="homepage-reviews-carousel-dots-list">
        <li>
          <button
            id="alpha"
            className="homepage-reviews-carousel-dots-list-each"
            onClick={handleClick}
          />
        </li>
        <li>
          <button
            id="beta"
            className="homepage-reviews-carousel-dots-list-each"
            onClick={handleClick}
          />
        </li>
        <li>
          <button
            id="gamma"
            className="homepage-reviews-carousel-dots-list-each"
            onClick={handleClick}
          />
        </li>
        <li>
          <button
            id="delta"
            className="homepage-reviews-carousel-dots-list-each"
            onClick={handleClick}
          />
        </li>
      </ul>
    </div>
  );
}

CarouselDots.propTypes = propTypes;
export default CarouselDots;
