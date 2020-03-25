import React from 'react';
import ReactDOM from 'react-dom';
import openSocket from 'socket.io-client';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const socket = openSocket('http://localhost:8080');
socket.on('mailSend', data => console.log(data));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
