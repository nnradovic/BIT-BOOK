import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './app/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
    <App />
    </HashRouter>,
     document.getElementById('root'));
    registerServiceWorker();