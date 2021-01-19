import Echo from 'laravel-echo';
import React from 'react';
import ReactDOM from 'react-dom';
import openSocket from 'socket.io-client';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.Pusher = require('pusher-js');

const socket = openSocket('http://localhost:8080', {
  transports: ['websocket'],
});
socket.on('mailSend', data => {
  console.log('success', data);
  socket.emit('msgSend', { 'success': 'Client to Server emit.' });
});

const echo = new Echo({
  broadcaster: 'pusher',
  key: '88c938ee6e49ac3dac8f',
  cluster: 'ap2',
  encrypted: true
});
echo.channel('mailSend').listen('EmailSend', data => console.log(data.data));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
