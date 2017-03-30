import { create } from 'apisauce';

const createAPI = () => {
  const api = create({
    baseURL: 'https://taxrates.api.avalara.com/postal?country=usa&postal=98101&apikey=fK%2BVk61LSB4Lg7piAan%2FgQudgwiqt4I2UbaFcrCgyqpnntXVWP%2FS1hZBQ6TLwq7Vr9lAeCW54bB0x%2B7J%2FxGbLQ%3D%3D&referrer=&lastReferrer=taxratesapi.avalara.com',
    credentials: 'omit',
  });

  const getTaxRate = () => api.get('');

  return {
    getTaxRate,
  };
};

export default { createAPI };
