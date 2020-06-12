import React from 'react';

class Login extends React.Component {
	render() {
		return (
			<div>
				{/* <div className="ui raised very padded text container segment">
					<h2 className="ui header animated slow bounceInDown">Front-end Under Construction...</h2>
				</div> */}

				<div className="ui middle aligned center aligned grid">
					<div className="column">
						<h2 className="ui teal image header">
							<div className="content">
								Log-in to your account
								</div>
						</h2>
						<form className="ui large form">
							<div className="ui stacked segment">
								<div className="field">
									<div className="ui left icon input">
										<i className="user icon"></i>
										<input type="text" name="email" placeholder="E-mail address" />
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon"></i>
										<input type="password" name="password" placeholder="Password" />
									</div>
								</div>
								<div className="ui fluid large teal submit button">Login</div>
							</div>
							<div className="ui error message"></div>
						</form>
						<div className="ui message">
							New to us? <a href="#" id="testModal">Sign Up</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Login;