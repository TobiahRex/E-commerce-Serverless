import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  startTimer: ['index'],
  stopTimer: null,
});

export const HomepageTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  reviews: {
    slideIndex: null,
    slideAdjust: null,
  },
};


let reduxTimer;
function asyncTimer() {
  let index = -1;
  reduxTimer = setInterval(() => {
    index += 1;
    return ({
      reviews: {
        slideIndex: index,
        slideAdjust: `${(-1000 * index) / 10}em`,
      },
    });
  }, 3000);
}

const startTimer = ({ reviews }, { index }) =>
asyncTimer(index, reviews.slideIndex);

const stopTimer = () => {
  reduxTimer.clearInterval();
  return ({
    reviews: {
      timer: null,
      slideIndex: null,
      slideAdjust: null,
    },
  });
};

export const homepageReducer = createReducer(INITIAL_STATE, {
  [Types.START_TIMER]: startTimer,
  [Types.STOP_TIMER]: stopTimer,
});
