import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './components/inputBar.js';
import 'bootstrap';
import '../scss/styles.scss';



ReactDOM.render(
  <div id='app'>    
    <Bar/>    
  </div>,
  document.getElementById('app')
);

module.hot.accept();
