import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './Home';
import Division from './Division';
import './index.css';

ReactDOM.render((
  /* jshint ignore:start */
	<Router history={browserHistory}>
		<Route path="/" component={Home}/>
    	<Route path="/:id" component={Division}/>
	</Router>
  /* jshint ignore:end */
),document.getElementById('root'));
