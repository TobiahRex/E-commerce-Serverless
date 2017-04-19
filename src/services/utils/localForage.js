import localForage from 'localforage';

export const reduxLocalForage = localForage.createInstance({
  name: 'NJ2JP',
  storeName: 'nj2jp-redux-persist',
  description: 'Contains persisted values for redux store.',
});
export const authLocalForage = localForage.createInstance({
  name: 'NJ2JP',
  storeName: 'nj2jp-auth',
  description: 'Contains persisted values for authorization branch of redux store.',
});
export const profileLocalForage = localForage.createInstance({
  name: 'NJ2JP',
  storeName: 'nj2jp-user',
  description: 'COntains persisted vlaues for user branch of redux store.',
});
