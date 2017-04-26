import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addToGuestCart: ['productObj'],
  addToMemberCart: ['productObj'],
  getTaxRate: null,
  setTaxRate: ['taxRate'],
});

export const orderTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  guestCart: JSON.parse(localStorage.getItem('guestCart')) || [{}],
  memberCart: JSON.parse(localStorage.getItem('memberCart')) || [{}],
  taxRate: {
    stateRate: 0.060,
    cityRate: 0.030,
    totalRate: 0.090,
  },
});

const addToGuestCart = (state, { productObj }) => ({
  ...state,
  guestCart: [...state.cart, productObj],
});

const addToMemberCart = (state, { productObj }) => ({
  ...state,
  memberCart: [...state.cart, productObj],
});

const setTaxRate = (state, { taxRate }) => ({
  ...state,
  taxRate,
});

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_GUEST_CART]: addToGuestCart,
  [Types.ADD_TO_MEMBER_CART]: addT`oMemberCart,
  [Types.SET_TAX_RATE]: setTaxRate,
});
