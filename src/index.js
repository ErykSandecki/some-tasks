import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// styles
import 'antd/dist/antd.css';
import './index.css';

// components
import Navigation from './components/Navigation';
import Routes from './core/Routes';

ReactDOM.render(
    <BrowserRouter>
        <Navigation/>
        <Routes/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
