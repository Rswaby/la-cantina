import React, { Component } from 'react';
import PropTypes from "prop-types";
import { TextField, Grid, Typography, withStyles, AppBar, Button } from "@material-ui/core";
import { AUTH_TOKEN, LOGIN_MUTATION } from "../../constants";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '400px'
	},
	dense: {
		marginTop: 16
	},
	menu: {
		width: 200
	},
	appbar: {
		backgroundColor: '#0FA2FF',
		height: '50px'
	},
	button: {
		margin: theme.spacing.unit * 2,
	},
});
const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`
class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			login: true,
			email: "",
			firstname: "",
			lastname: "",
			password: "",
		}

	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	handleSubmit(event) {
		console.log(this.state, this.props);
		//this.props.history.push('#')
  		//"proxy": "http://localhost:8000"
		event.preventDefault();

	}

	_confirm = async data => {
		console.log("Confirmed")
		const { token } = this.state.login ? data.login : data.signup
		this._saveUserData(token)
		//this.props.history.push('/')
	}


	_saveUserData = token => {
		localStorage.setItem(AUTH_TOKEN, token);
	}


	render() {
		const { classes } = this.props;
		const { login, firstname, lastname, password, email } = this.state;
		const name = firstname + ' ' + lastname;
		//console.log(name,password,email)
		return (
			<div>
				<AppBar position="relative" className={classes.appbar}>
					<Grid justify="center" container>
						<Typography
							className={classes.dense}
							variant='title'
							color='inherit'>
							{login ? 'Login' : 'Register'}
						</Typography>
					</Grid>
				</AppBar>
				<form className={classes.container}>
					<Grid justify="center" container className={classes.dense}>
						<Grid container justify="center">
							{!login && (<TextField
								id="outlined-firstname-input"
								label="First Name"
								className={classes.textField}
								type="text"
								name="firstname"
								autoComplete="firstname"
								margin="normal"
								variant="outlined"
								onChange={this.handleChange('firstname')}
							/>)}
							{!login && (<TextField
								id="outlined-lastname-input"
								label="Last Name"
								className={classes.textField}
								type="text"
								name="lastname"
								autoComplete="lastname"
								margin="normal"
								variant="outlined"
								onChange={this.handleChange('lastname')}
							/>)}
						</Grid>
						<Grid container justify="center" className={classes.dense}>
							<TextField
								id="outlined-email-input"
								label="Email"
								className={classes.textField}
								type="email"
								name="email"
								autoComplete="email"
								margin="normal"
								variant="outlined"
								onChange={this.handleChange('email')}
							/>
						</Grid>
						<Grid container justify="center" className={classes.dense}>
							<TextField
								id="outlined-password-input"
								label="Password"
								className={classes.textField}
								type="password"
								autoComplete="current-password"
								margin="normal"
								variant="outlined"
								onChange={this.handleChange('password')}
							/>
						</Grid>
						<Grid container justify="center" className={classes.dense}>
							<Grid item xs={3}>
								<Mutation
									mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
									variables={{ email, password, name }}
									onCompleted={data => console.log("Data",data)}>
									{mutation => (
										<Button className={classes.button} type='submit' variant="outlined" color="primary"
											onClick={mutation}>
											{login ? 'Login' : 'Register'}
										</Button>
									)}
								</Mutation>
							</Grid>
							<Grid item xs={3}>
								<Button
									className={classes.button}
									variant="outlined"
									color="primary"
									onClick={() => this.setState({ login: !login })}>
									{login ? 'create an account' : 'already have an account?'}
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</form>
			</div>
		)
	}
}
Register.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Register);
