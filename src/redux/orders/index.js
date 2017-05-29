import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addToGuestCart: ['productObj'],
  updateToGuestCart: ['updatedProducts'],
  reduxUpdateToMemberCart: ['updatedProducts'],
  getTaxRate: null,
  setTaxRate: ['taxRate'],
});

export const orderTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  cart: {
    guest: JSON.parse(localStorage.getItem('guestCart')) || [],
    member: [],
  },
  taxRate: {
    stateRate: 0.060,
    cityRate: 0.030,
    totalRate: 0.090,
  },
});

const addToGuestCart = (state, { productObj }) => ({
  ...state,
  cart: {
    guest: [...state.cart.guest, { ...productObj }],
    member: [...state.cart.member],
  },
});

const updateToGuestCart = (state, { updatedProducts }) => ({
  ...state,
  cart: {
    guest: updatedProducts,
    member: [...state.cart.member],
  },
});

const reduxUpdateToMemberCart = (state, { updatedProducts }) => ({
  ...state,
  cart: {
    guest: [...state.cart.guest],
    member: updatedProducts,
  },
});

const setTaxRate = (state, { taxRate }) => ({
  ...state,
  taxRate,
});

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_GUEST_CART]: addToGuestCart,
  [Types.UPDATE_TO_GUEST_CART]: updateToGuestCart,
  [Types.REDUX_UPDATE_TO_MEMBER_CART]: reduxUpdateToMemberCart,
  [Types.SET_TAX_RATE]: setTaxRate,
});
