import React from 'react';
import axios from 'axios';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
	}

	login() {
		const email = this.emailRef.current.value;
		const password = this.passwordRef.current.value;
		axios.post('/users', { email, password });
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
									href="/users/me"
									onClick={() => this.login()}
									className="ui fluid large teal submit button">
									Login
								</a>
							</div>
							<div className="ui error message"></div>
						</form>
						<div className="ui message">
							New to us?{' '}
							<a href="/users" id="testModal">
								Sign Up
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
