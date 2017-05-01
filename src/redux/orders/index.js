import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addToGuestCart: ['productObj'],
  addToMemberCart: ['productObj'],
  updateToGuestCart: ['updatedProductObj'],
  updateToMemberCart: ['updatedProductObj'],
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
    guest: [...state.cart.guest, productObj],
    member: [...state.cart.member],
  },
});

const addToMemberCart = (state, { productObj }) => ({
  ...state,
  cart: {
    guest: [...state.cart.guest],
    member: [...state.cart.member, productObj],
  },
});

const updateToGuestCart = (state, { updatedProductObj }) => ({
  ...state,
  cart: {
    guest: [...updatedProductObj],
    member: [...state.cart.member],
  },
});

const updateToMemberCart = (state, { updatedProductObj }) => ({
  ...state,
  cart: {
    guest: [...state.cart.guest],
    member: [...updatedProductObj],
  },
});

const setTaxRate = (state, { taxRate }) => ({
  ...state,
  taxRate,
});

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_GUEST_CART]: addToGuestCart,
  [Types.ADD_TO_MEMBER_CART]: addToMemberCart,
  [Types.UPDATE_TO_GUEST_CART]: updateToGuestCart,
  [Types.UPDATE_TO_MEMBER_CART]: updateToMemberCart,
  [Types.SET_TAX_RATE]: setTaxRate,
});
