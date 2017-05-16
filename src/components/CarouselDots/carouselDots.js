import React from 'react';
import PropTypes from 'prop-types';

const { number, func } = PropTypes;
const propTypes = {
  show: number.isRequired,
  handleClick: func.isRequired,
};

function CarouselDots({ show, handleClick }) {
  let backgroundColor = ['alpha', 'beta', 'gamma', 'delta'];
  backgroundColor = backgroundColor.map((id, i) => {
    if (i === show) {
      return { backgroundColor: '#FC2525' };
    }
    return { backgroundColor: '#9E9EA5' };
  });

  return (
    <div className="homepage-reviews-carousel-dots">
      <ul className="homepage-reviews-carousel-dots-list">
        <li>
          <button
            style={backgroundColor[0]}
            id="alpha"
            className="homepage-reviews-carousel-dots-list-each"
            onClick={handleClick}
          />
        </li>
        <li>
          <button
            style={backgroundColor[1]}
            id="beta"
            className="homepage-reviews-carousel-dots-list-each"
            onClick={handleClick}
          />
        </li>
        <li>
          <button
            style={backgroundColor[2]}
            id="gamma"
            className="homepage-reviews-carousel-dots-list-each"
            onClick={handleClick}
          />
        </li>
        <li>
          <button
            style={backgroundColor[3]}
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
