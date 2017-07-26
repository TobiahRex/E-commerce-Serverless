export default () => {
  const today = new Date();
  const years = [];

  for (let i = 0; i < 12; i += 1) {
    let yearBase = Number(today.getFullYear());
    years.push(yearBase += i);
  }
  return years;
};
