import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './website.css';
import Websites from './components/websites';
import Create from './components/create';
import Update from './components/update';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(	
	<React.StrictMode>
		<Router>
			<Route exact path='/' component={Websites} />
			<Route path='/create' component={Create} />
			<Route path='/update/:id' component={Update} />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
