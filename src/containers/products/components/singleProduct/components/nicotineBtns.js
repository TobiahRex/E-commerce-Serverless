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
  nicotineStrengths = nicotineStrengths.map((strength) => {
    switch (strength) {
      case 'two': return 2;
      case 'four': return 4;
      case 'six': return 6;
      case 'eight': return 8;
      case 'ten': return 10;
      case 'twelve': return 12;
      case 'fourteen': return 14;
      case 'sixteen': return 16;
      case 'eighteen': return 18;
      default: return 0;
    }
  });

  return (
    <div className="desc__nicotine">
      <h3>Nicotine Strength</h3>
      <ul className="nicotine__list">
        {
          nicotineStrengths.map(strength => (
            <li
              key={new Buffer(strength).toString('base64')}
              className="list--strength"
              style={
                strength === chosenStrength ?
                style.active : style.inactive
              }
            >
              <button
                data-tag={strength}
                className="strength__btn" onClick={nicotineHandler}
              >{`${strength}mg`}</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
const { func, number, arrayOf, string } = PropTypes;
NicotineBtns.propTypes = {
  chosenStrength: number.isRequired,
  nicotineHandler: func.isRequired,
  nicotineStrengths: arrayOf(string).isRequired,
};
export default NicotineBtns;
