import React from 'react';
import axios from 'axios';

import FormDialog from './signUpModal';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
	}

	login() {
		const email = this.emailRef.current.value;
		const password = this.passwordRef.current.value;
		axios
			.post('/users/login', { email, password })
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	signUp() {
		return <FormDialog />;
	}
	render() {
		return (
			<div>
				<div className="ui middle aligned center aligned grid">
					<div className="column">
						<h2 className="ui teal image header">
							<div className="content">Log-in to your account</div>
						</h2>
						<form className="ui large form">
							<div className="ui stacked segment">
								<div className="field">
									<div className="ui left icon input">
										<i className="user icon"></i>
										<input
											type="text"
											name="email"
											placeholder="E-mail address"
											ref={this.emailRef}
										/>
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon"></i>
										<input
											type="password"
											name="password"
											placeholder="Password"
											ref={this.passwordRef}
										/>
									</div>
								</div>
								<a
									href="/dashboard"
									onClick={() => this.login()}
									className="ui fluid large teal submit button">
									Login
								</a>
							</div>
							<div className="ui error message"></div>
						</form>
						<div className="ui message">
							New to us?{' '}
							{/* <a href="#" id="testModal" onClick={() => this.signUp()}>
								Sign Up
							</a> */}
							<FormDialog />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
