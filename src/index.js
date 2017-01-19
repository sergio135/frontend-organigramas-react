import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from './HomePage';
import DivisionPage from './DivisionPage';
import './index.css';

render((
  /* jshint ignore:start */
	<Router history={hashHistory}>
		<Route path="/" component={HomePage}/>
    	<Route path="/:id" component={DivisionPage}/>
	</Router>
  /* jshint ignore:end */
),document.getElementById('root'));
