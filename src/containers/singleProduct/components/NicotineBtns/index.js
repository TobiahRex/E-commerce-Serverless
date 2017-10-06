import React from 'react';
import PropTypes from 'prop-types';
import {
  OptionsHdr,
  OptionsNicotine,
} from '../';

function NicotineBtns({
  chosenStrength,
  nicotineStrengths,
  nicotineHandler,
}) {
  return (
    <div className="desc__nicotine">
      <OptionsHdr />
      <OptionsNicotine
        chosenStrength={chosenStrength}
        nicotineHandler={nicotineHandler}
        nicotineStrengths={nicotineStrengths}
      />
    </div>
  );
}
const { func, number, arrayOf, string, shape } = PropTypes;
NicotineBtns.propTypes = {
  chosenStrength: number.isRequired,
  nicotineHandler: func.isRequired,
  nicotineStrengths: arrayOf(shape({
    _id: string,
    nicotineStrength: string,
  })).isRequired,
};
export default NicotineBtns;
