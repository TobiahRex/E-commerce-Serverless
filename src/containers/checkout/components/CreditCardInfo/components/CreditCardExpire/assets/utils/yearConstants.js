/** Function: "calculateYears"
* 1) Establish today's date using Date constructore.
* 2) Get year from step 1 result.
* 3) Create a for loop, and generate a dynamic, incrementing year value.
* 4) Cast that Number to a String so it can be used as a react "key" value later with the Buffer constructor. (First argument to a Buffer when specifying encoding, must be a string).
* 5) Push result into "years" array.
* 6) Return years array.
*
* @param {none}
*
* @return {array} years - An array with 4 digit years {string}.
*/

function calculateYears() {
  const today = new Date();
  const years = [];

  for (let i = 0; i < 12; i += 1) {
    let yearBase = Number(today.getFullYear());
    const yearToAdd = String(yearBase += i);
    years.push(yearToAdd);
  }
  return years;
}

const Years = calculateYears();

export default Years;
