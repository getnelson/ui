import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import './index.css';
import App from './App';

const history = createBrowserHistory();

const app = (
    <Router history={history}>
        <App />
    </Router>
);

ReactDOM.render(app, document.getElementById('root'));
