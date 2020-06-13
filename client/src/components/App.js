import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing.js';
import Login from './Login.js';
import Dashboard from './Dashboard';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Route path="/" component={Landing} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" exact component={Dashboard} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
