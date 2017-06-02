import React from 'react';
import PropTypes from 'prop-types';

function NicotineBtns({ chosenStrength, nicotineStrengths, nicotineHandler }) {
  const style = {
    active: {
      backgroundColor: '#063A7A',
    },
    inactive: {
      backgroundColor: '#FC2525',
    },
  };
  nicotineStrengths = nicotineStrengths.map(({ _id, nicotineStrength }) => {
    switch (nicotineStrength) {
      case 'two': return ({ nicotineStrength: 2, _id });
      case 'four': return ({ nicotineStrength: 4, _id });
      case 'six': return ({ nicotineStrength: 6, _id });
      case 'eight': return ({ nicotineStrength: 8, _id });
      case 'ten': return ({ nicotineStrength: 10, _id });
      case 'twelve': return ({ nicotineStrength: 12, _id });
      case 'fourteen': return ({ nicotineStrength: 14, _id });
      case 'sixteen': return ({ nicotineStrength: 16, _id });
      case 'eighteen': return ({ nicotineStrength: 18, _id });
      default: return 0;
    }
  });

  return (
    <div className="desc__nicotine">
      <h3>Nicotine Strength</h3>
      <ul className="nicotine__list">
        {
          nicotineStrengths.map(({ _id, nicotineStrength }) => (
            <li
              key={_id}
              className="list--strength"
              style={
                nicotineStrength === chosenStrength ?
                style.active : style.inactive
              }
            >
              <button
                data-nicotinestrength={nicotineStrength}
                data-product={_id}
                className="strength__btn" onClick={nicotineHandler}
              >{`${nicotineStrength}mg`}</button>
            </li>
          ))
        }
      </ul>
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
