/* Function: "calculateYears"
* 1) Establish today's date using Date constructore.
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
