import { create } from 'apisauce';

const createGeoAPI = () => {
  const api = create({
    baseURL: 'http://ipinfo.io',
    credentials: 'omit',
  });

  const getGeoLocation = () => api.get('');

  return {
    getGeoLocation,
  };
};
export default createGeoAPI();
