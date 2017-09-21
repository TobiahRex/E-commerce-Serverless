import React from 'react';
// import { FormattedMessage as IntlMsg } from 'react-intl';

export default function How() {
  return (
    <div className="splash-how">
      <div className="how__header">
        <div className="header__text--container">
          <h2 className="text-container__header-button" data-ix="show-hide">
            How
          </h2>
        </div>
        <div className="header__text--container">
          <h2 className="container__heading--moving" data-ix="questionmark-tilt">
            ?
          </h2>
        </div>
      </div>
      <div className="how__curious-person">
        <img
          alt="how"
          className="curious-person__img"
          sizes="(max-width: 479px) 195px, (max-width: 767px) 273px, (max-width: 991px) 389.859375px, 587.140625px"
          src="images/girl-wondering.png"
          srcSet="images/girl-wondering-p-500.png 500w, images/girl-wondering.png 640w"
        />
        <div className="how__action-btn">
          <a className="show-me__button w-inline-block" data-ix="show-me">
            <div className="show-me__button--alt-1" />
            <div className="show-me__button--alt-2" />
            <div className="show-me__text">
              Show Me
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
