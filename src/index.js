import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from './HomePage';
import DivisionPage from './DivisionPage';
import './index.css';

render((
  /* jshint ignore:start */
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={HomePage}/>
  	  	<Route path="/:id" component={DivisionPage}/>
		</Router>
	</Provider>
  /* jshint ignore:end */
),document.getElementById('root'));
