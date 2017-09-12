import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';
import './assets/styles/style.scss';

const CardHdr = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="content-hdr__container content-hdr__container--portrait">
      <h2 className="content-hdr content-hdr--landscape">
        {props.header}
      </h2>
    </div>
  );
};

CardHdr.propTypes = {
  header: PropTypes.string.isRequired,
};

export default CardHdr;
