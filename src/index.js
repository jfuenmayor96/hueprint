import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Prueba from './Prueba';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App/>
    </Router>    
, document.getElementById('root'));

