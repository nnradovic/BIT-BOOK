import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './app/App.js';
import registerServiceWorker from './registerServiceWorker';
import WelcomePage from './app/login/WelcomePage'
import { RootComponent } from './app/RootComponent';

ReactDOM.render(
    <HashRouter>
        <RootComponent />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
