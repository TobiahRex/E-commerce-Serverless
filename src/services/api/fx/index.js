
import { create } from 'apisauce';

const createSquareAPI = () => {
  const api = create({
    baseURL: 'https://api.fixer.io',
  });

  const getRates = currency => api.get(`/latest?base=${currency}?callback=?`);

  return {
    getRates,
  };
};

export default createSquareAPI();
