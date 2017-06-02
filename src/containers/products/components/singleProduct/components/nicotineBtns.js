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
  nicotineStrengths = nicotineStrengths.map(({ _id, strength }) => {
    switch (strength) {
      case 'two': return ({ strength: 2, _id });
      case 'four': return ({ strength: 4, _id });
      case 'six': return ({ strength: 6, _id });
      case 'eight': return ({ strength: 8, _id });
      case 'ten': return ({ strength: 10, _id });
      case 'twelve': return ({ strength: 12, _id });
      case 'fourteen': return ({ strength: 14, _id });
      case 'sixteen': return ({ strength: 16, _id });
      case 'eighteen': return ({ strength: 18, _id });
      default: return 0;
    }
  });

  return (
    <div className="desc__nicotine">
      <h3>Nicotine Strength</h3>
      <ul className="nicotine__list">
        {
          nicotineStrengths.map(({ _id, strength }) => (
            <li
              key={_id}
              className="list--strength"
              style={
                strength === chosenStrength ?
                style.active : style.inactive
              }
            >
              <button
                data-strength={strength}
                data-product={_id}
                className="strength__btn" onClick={nicotineHandler}
              >{`${strength}mg`}</button>
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
