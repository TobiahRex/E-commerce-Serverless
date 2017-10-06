import React from 'react';
import PropTypes from 'prop-types';
import { convertStrengthToNumber } from '../../assets/utils';

function OptionsNicotine({
  chosenStrength,
  nicotineHandler,
  nicotineStrengths,
}) {
  const style = {
    active: {
      outline: 'none',
      backgroundColor: '#063A7A',
    },
    inactive: {
      outline: 'none',
      backgroundColor: '#FC2525',
    },
  };
  nicotineStrengths = convertStrengthToNumber(nicotineStrengths);

  return (
    <div className="product-options__options-nicotine">
      {
        nicotineStrengths.map(({ _id, nicotineStrength }) => (
          <div
            key={_id}
            className="options-nicotine__nicotine-button-container"
          >
            <button
              style={
                nicotineStrength === chosenStrength ?
                style.active : style.inactive
              }
              data-nicotinestrength={nicotineStrength}
              data-product={_id}
              className="nicotine-button-container__nicotine-button"
              onClick={nicotineHandler}
            >
              <div className="nicotine-button__text">
                {`${nicotineStrength}mg`}
              </div>
            </button>

          </div>
        ))
      }
    </div>
  );
}
const { func, number, arrayOf, string, shape } = PropTypes;
OptionsNicotine.propTypes = {
  chosenStrength: number.isRequired,
  nicotineHandler: func.isRequired,
  nicotineStrengths: arrayOf(shape({
    _id: string,
    nicotineStrength: string,
  })).isRequired,
};
export default OptionsNicotine;
