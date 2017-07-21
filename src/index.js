import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Props from './components/Props';
import Map from './components/Map';
import Events from './components/Events';
import FunClass from './components/FuncClass.js';
import ArrayManipulation from './components/ArrayManipulation';
import State from './components/States';


import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'


ReactDOM.render(
    <Router>
          <App>  
          <Route path="/map" component={Map}/>
          <Route path="/array" component={ArrayManipulation}/>
          <Route path="/props" component={Props}/>
          <Route path="/events" component={Events}/>
          <Route path="/funcclass" component={FunClass}/>
          <Route path="/state" component={State}/>


          </App>
    </Router>
,
 document.getElementById('root'));
registerServiceWorker();
