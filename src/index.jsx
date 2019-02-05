import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { register } from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line no-undef
register();
