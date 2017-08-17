import { create } from 'apisauce';

const createTaxAPI = () => {
  const api = create({
    baseURL: 'https://sandbox-rest.avatax.com/api/v2/taxrates/',
    headers: {
      Authorization: `Basic ${new Buffer('2000229414:CD9D942F97564AD3', 'utf8').toString('base64')}`,
    },
  });

  const getTaxRate = (country, postalCode) => api.get(`/bypostalcode?country=${country}&postalCode=${postalCode}`);

  return {
    getTaxRate,
  };
};
export default createTaxAPI();
