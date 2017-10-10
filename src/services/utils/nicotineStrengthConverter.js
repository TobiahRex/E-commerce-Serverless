export default (strength) => {
  switch (strength) {
    case 'zero': return '0 mg';
    case 'two': return '2 mg';
    case 'four': return '4 mg';
    case 'six': return '6 mg';
    case 'eight': return '8 mg';
    case 'ten': return '10 mg';
    case 'twelve': return '12 mg';
    case 'fourteen': return '14 mg';
    case 'sixteen': return '16 mg';
    default: return strength;
  }
};
