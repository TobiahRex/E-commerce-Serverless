import React from 'react';

export default function HomepageHeader() {
  return (
    <header className="homepage__header-img-src">
      <div className="homepage__header--inner-container">
        <img alt="NicJuice2Japan" className="header__img-src" />
        <div className="header__msg--container">
          <h1 className="msg__title">Fastest Nicotine e-Juice Delivery In Japan</h1>
          <h1 className="msg__subtitle">Guaranteed!</h1>
        </div>
        <button className="header__cta primary-button shutter-out-horizontal">
          Shop Now
        </button>
      </div>
    </header>
  );
}

/*
TODO
1. Add "Shutter Out Horizontal" CTA to Splash Header.

2. Add arrow down pulse to Home pages.

3. Rename Homepage style sheets classes to BEM syntax.

4. Add sectional scrolling to Homepage.

5. Create Mockups & Wireframes for Homepage bottom section.

6. Add single parallax for Homepage image.
http://jsfiddle.net/X7UwG/

7. Add fade in transition css for Homepage Header title
http://jsfiddle.net/SO_AMK/VV2ek/
*/
