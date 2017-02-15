import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  startTimer: null,
  stopTimer: null,
  restartTimer: ['index'],
});

export const HomepageTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  reviews: {
    slideIndex: 0,
    slideAdjust: '0em',
  },
};

let globalTimer;
const startTimer = (index) => {
  // function startTimer(index) {
    if (index === 4) {
      return startTimer(0);
    }
    console.log(index);
    return globalTimer = setTimeout(() => {
      startTimer(++index);
    }, 2000);
  }

  startTimer(0);

  setTimeout(() => {
    clearTimeout(globalTimer);
    startTimer(1);
  }, 5000);

  if (index === 3) {
    index = 0;
    reduxTimer = setInterval(() => {
      index += 1;
      return ({
        reviews: {
          slideIndex: index,
          slideAdjust: `${(-1000 * index) / 10}em`,
        },
      });
    }, 3000);

    return ({
      reviews: {
        slideIndex: index,
        slideAdjust: `${(-1000 * index) / 10}em`,
      },
    });
  } else {
    reduxTimer = setInterval(() => {
      index += 1;
      return ({
        reviews: {
          slideIndex: index,
          slideAdjust: `${(-1000 * index) / 10}em`,
        },
      });
    }, 3000);

    return ({
      reviews: {
        slideIndex: 0,
        slideAdjust: `0em`,
      },
    });
  }
};


const stopTimer = (index) => {
  reduxTimer.clearInterval();
  return ({
    reviews: {
      slideIndex: 1,
      slideAdjust: `${(-1000 * index) / 10}em`,
    },
  });
};

const restartTimer = (state, { index }) => {
  let customIndex = index;
  reduxTimer = setInterval(() => {
    customIndex += 1;
    return ({
      reviews: {
        slideIndex: customIndex,
        slideAdjust: `${(-1000 * customIndex) / 10}em`,
      },
    });
  }, 3000);

  return ({
    reviews: {
      slideIndex: customIndex,
      slideAdjust: `${(-1000 * customIndex) / 10}em`,
    },
  });
};

export const homepageReducer = createReducer(INITIAL_STATE, {
  [Types.START_TIMER]: startTimer,
  [Types.STOP_TIMER]: stopTimer,
  [Types.RESTART_TIMER]: restartTimer,
});
