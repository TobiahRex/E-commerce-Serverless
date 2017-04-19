import io from 'socket.io-client'; //eslint-disable-line
import orderActions from '../redux/orders';

const socket = io();

socket.on('user_ip_location', (info) => {
  localStorage.setItem('active_location', JSON.stringify(info));
});

export function taxRateListener(dispatch) {
  socket.on('tax_rate', (taxRate) => {
    dispatch(orderActions.setTaxRate(taxRate));
  });
}

export default socket;
