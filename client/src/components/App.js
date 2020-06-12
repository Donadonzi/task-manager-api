import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Login from './Login';
import Dashboard from './Dashboard';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Route path="/" exact component={Landing} />
					<Route path="/login" exact component={Login} />
					<Route path="/dashboard" exact component={Dashboard} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
