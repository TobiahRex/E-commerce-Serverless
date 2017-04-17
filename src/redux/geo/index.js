import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  updateGeo: ['ip_address', 'lat_long'],
});

export const geoTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  ip_address: null,
  lat_long: null,
});

const updateGeo = (state, { ip_address, lat_long }) => ({
  ipAddress: ip_address,
  latLong: lat_long,
});

export const geoReducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_GEO]: updateGeo,
});
