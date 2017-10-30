import React from 'react';
import './assets/styles/style.css';

export default function NotFound() {
  return (
    <div className="_404-page">
      <div className="_404-page__img-container" id="scene">
        <img
          alt="404"
          className="img-container__img"
          data-depth="0.50"
          data-ix="new-interaction"
          sizes="(max-width: 479px) 96vw, (max-width: 767px) 380px, 500px"
          src="images/404-NJ2JP-1060px.png"
          srcSet="images/404-NJ2JP-1060px-p-500.png 500w, images/404-NJ2JP-1060px-p-800.png 800w, images/404-NJ2JP-1060px.png 1061w"
        />
      </div>
      <div className="_404-page__blurb-container">
        <div className="blurb-container__hdr-box">
          <h1 className="hdr-box__blurb">
            Oops!
          </h1>
        </div>
        <div className="blurb-container__sub-hdr-box">
          <h2 className="sub-hdr-box__blurb">
            We {'can\'t'} seem to find the page {'you\'re'} looking for.
          </h2>
        </div>
        <div className="blurb-container__blurb-container">
          <div className="blurb-container__blurb">
            The page you were looking for appears to have moved, deleted or does not exist.
            <br />
            Please click on the image above to go back to the homepage.
          </div>
        </div>
      </div>
    </div>
  );
}
