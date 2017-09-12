import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';
import './assets/styles/style.scss';

const CardHdr = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="content-blurb__container content-blurb__container--portrait">
      <p className="content-blurb content-blurb--portrait">
        {props.blurb}
      </p>
    </div>
  );
};

CardHdr.propTypes = {
  blurb: PropTypes.string.isRequired,
};

export default CardHdr;
