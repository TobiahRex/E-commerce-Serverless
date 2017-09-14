export default (nicotine) => {
  let result;
  if (Array.isArray(nicotine)) {
    result = nicotine.map(({ _id, nicotineStrength }) => {
      switch (nicotineStrength) {
        case 'zero': return ({ nicotineStrength: 0, _id });
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
  } else if (typeof nicotine === 'string') {
    switch (nicotine) {
      case 'zero': return 0;
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
  }
  return result;
};
