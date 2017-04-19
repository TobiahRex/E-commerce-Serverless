import localForage from 'localforage';
import { persistStore } from 'redux-persist';
// import apiActions from '../../redux/api';
// import StartupActions from '../Redux/StartupRedux'

const updateReducers = (store) => {
  localForage.config({
    name: 'NJ2JP',
    storeName: 'redux-persist',
    description: 'redux-persist cold storage for NJ2JP',
  });
  const config = {
    storage: localForage,
    blacklist: ['user', 'auth'],
    // whitelist: persistentStoreWhitelist,
    // transforms: [],
  };
  persistStore(store, config);
  // persistStore(store, config, () => {
    // store.getState();
    // store.dispatch(Actions.startup());
  // });
};
export default { updateReducers };
