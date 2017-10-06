import React from 'react';
import PropTypes from 'prop-types';
import { convertStrengthToNumber } from '../../assets/utils';
import {
  OptionsHdr,
  OptionsNicotine,
} from '../';

function NicotineBtns({
  chosenStrength,
  nicotineStrengths,
  nicotineHandler,
}) {
  nicotineStrengths = convertStrengthToNumber(nicotineStrengths);

  return (
    <div className="desc__nicotine">
      <OptionsHdr />
      <OptionsNicotine
        chosenStrength={chosenStrength}
        nicotineStrength={nicotineStrengths}
        nicotineHandler={nicotineHandler}
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
