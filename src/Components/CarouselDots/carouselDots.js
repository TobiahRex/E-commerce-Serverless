import React from 'react';

export default function CarouselDots() {
  return (
    <div className="homepage-reviews-carousel-dots">
      <ul className="homepage-reviews-carousel-dots-list">
        <li>
          <button className="homepage-reviews-carousel-dots-list-each" onClick={() => console.log('alpha')} />
        </li>
        <li>
          <button
            onClick={() => console.log('beta')} className="homepage-reviews-carousel-dots-list-each"
          />
        </li>
        <li>
          <button
            onClick={() => console.log('gamma')} className="homepage-reviews-carousel-dots-list-each"
          />
        </li>
        <li>
          <button
            onClick={() => console.log('delta')} className="homepage-reviews-carousel-dots-list-each"
          />
        </li>
      </ul>
    </div>
  );
}
