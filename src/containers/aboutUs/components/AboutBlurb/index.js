import React from 'react';

import { WebflowJs } from './assets/utils';

const AboutBlurb = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div>
      <div className="about-container__body-text about__container w-container">
        <div className="about-container about-continer__body-text">
          <p className="about-container__body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
    </div>
  );
};


export default AboutBlurb;
