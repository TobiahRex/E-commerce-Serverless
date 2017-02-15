import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  'startTimer': ['index'],
  'stopTimer': null,
});

export const HomepageTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  reviews: {
    timer: null,
    slideIndex: null,
    slideAdjust: null,
  },
};

const startTimer = (state, { index }) => ({
  reviews: {
    timer: setInterval(() => ({
      reviews: {
        slideIndex: index,
        slideAdjust: `${(-1000 * index) / 10}em`,
      },
    }), 3000),
  },
});

const stopTimer = () => ({
  reviews: {
    timer: null,
    slideIndex: null,
    slideAdjust: null,
  },
});

export const homepageReducer = createReducer(INITIAL_STATE, {
  [Types.START_TIMER]: startTimer,
  [Types.STOP_TIMER]: stopTimer,
});
