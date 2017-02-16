import io from 'socket.io-client'; //eslint-disable-line
const socket = io();

socket.on('user_ip_location', (info) => {
  localStorage.setItem('active_location', JSON.stringify(info));
});
