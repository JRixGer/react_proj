/* eslint-disable no-multi-assign */
// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

// import AppContainer from './layout/AppContainer';
import DemoAppContainer from './layout/DemoAppContainer';
import * as serviceWorker from './serviceWorker';


import './styles/App.css';
import './styles/siemens.css';


window.jQuery = window.$ = $;
require('bootstrap');
require('bootstrap-switch');

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(DemoAppContainer);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
