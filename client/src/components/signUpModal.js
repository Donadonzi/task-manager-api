import axios from 'axios';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends React.Component {
	constructor(props) {
		super(props);
		const nameRef = React.createRef();
		const emailRef = React.createRef();
		const passwordRef = React.createRef();

		this.state = { open: false, name:'', email:'', password:'' };
	}

	handleToggle = () => {
		this.setState({ open: !this.state.open });
	};

	handleChange=(e, item) => {
	this.setState({ [item]: e.target.value });
	}

	async handleSignUp() {
		this.setState({ open: false });
		const { name, email, password } = this.state;
		const response = await axios.post('/users', { name, email, password });
		console.log(response);
	}

	render() {
		return (
			<div>
				<Button variant="outlined" color="primary" onClick={this.handleToggle}>
					Sign Up
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleToggle}
					aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To create an account on Task Manager, please fill in the required
							fields below:
						</DialogContentText>
						<TextField
							required
							autoFocus
							margin="dense"
							id="name"
							label="Name"
							type="text"
							fullWidth
							onChange={(e) => this.handleChange(e, 'name')}
						/>
						<TextField
							required
							autoFocus
							margin="dense"
							id="email"
							label="Email Address"
							type="email"
							fullWidth
							onChange={(e) => this.handleChange(e, 'email')}
							
						/>
						<TextField
							required
							autoFocus
							margin="dense"
							id="password"
							label="Password"
							type="password"
							fullWidth
							onChange={(e) => this.handleChange(e, 'password')}	
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={(e) => this.handleToggle(e)} color="primary">
							Cancel
						</Button>
						<Button onClick={(e) => this.handleSignUp(e)} color="primary">
							Sign Up
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default FormDialog;
