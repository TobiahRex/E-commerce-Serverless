import request from 'request';

export default function socketActions(socket) {
  // Retrieving Tax Rate.
  request('https://taxrates.api.avalara.com/postal?country=usa&postal=98101&apikey=fK%2BVk61LSB4Lg7piAan%2FgQudgwiqt4I2UbaFcrCgyqpnntXVWP%2FS1hZBQ6TLwq7Vr9lAeCW54bB0x%2B7J%2FxGbLQ%3D%3D&referrer=&lastReferrer=taxratesapi.avalara.com', (err, res, body) => {
    const response = JSON.parse(body);
    const taxRate = {
      stateRate: response.rates[0].rate,
      cityRate: response.rates[1].rate,
      totalRate: response.totalRate,
    };
    socket.emit('tax_rate', taxRate);
  });

  // Retrieving Client IP information.
  request('http://ipinfo.io', (err, res, body) => {
    console.log('location: ', JSON.parse(body));
    socket.emit('user_ip_location', JSON.parse(body, null, 2));
  });
}
