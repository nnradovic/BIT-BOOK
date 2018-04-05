import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { RootComponent } from './app/RootComponent';

ReactDOM.render(
    <HashRouter>
        <RootComponent />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
