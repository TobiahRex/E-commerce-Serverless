import localForage from 'localforage';
import { persistStore } from 'redux-persist';
// import apiActions from '../../redux/api';
// import StartupActions from '../Redux/StartupRedux'

const updateReducers = (store) => {
  const config = {
    storage: localForage,
    // blacklist: persistentStoreBlacklist,
    // whitelist: persistentStoreWhitelist,
    // transforms: [],
  };
  persistStore(store, config, () => {
    console.info('Rehydration Completed!\n');
    // store.getState();
    // store.dispatch(Actions.startup());
  });
};
export default { updateReducers };
