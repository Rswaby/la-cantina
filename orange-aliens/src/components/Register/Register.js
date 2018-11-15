import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import { TextField, Grid, Typography, withStyles, AppBar, Button } from "@material-ui/core";

// more components at https://material-ui.com/getting-started/usage/
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
		margin: theme.spacing.unit,
	},
});
class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
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
		event.preventDefault();

	}

	render() {
		const {classes} = this.props;
		return (
			<div>
				<AppBar position="relative" className={classes.appbar}>
					<Grid justify="center" container>
						<Typography
							className={classes.dense}
							variant='title'
							color='inherit'>
							Register
					</Typography>
					</Grid>
				</AppBar>
				<form className={classes.container}>
					<Grid justify="center" container className={classes.dense}>
						<Grid container justify="center">
							<TextField
								id="outlined-firstname-input"
								label="First Name"
								className={classes.textField}
								type="text"
								name="firstname"
								autoComplete="firstname"
								margin="normal"
								variant="outlined"
								onChange={this.handleChange('firstname')}
							/>

							<TextField
								id="outlined-lastname-input"
								label="Last Name"
								className={classes.textField}
								type="text"
								name="lastname"
								autoComplete="lastname"
								margin="normal"
								variant="outlined"
								onChange={this.handleChange('lastname')}
							/>
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
							<Button type='submit' variant="outlined" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
								Register
								</Button>
						</Grid>
					</Grid>

				</form>
			</div>
		);
	}
}

Register.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Register);
