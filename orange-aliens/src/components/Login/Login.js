import React, { Component } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import { TextField, Grid, Typography, withStyles, AppBar,Button } from "@material-ui/core";


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
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		//this.handleChange = this.handleChange.bind(this);
	}
	handleChange = name => event => {
		this.setState({
		  [name]: event.target.value,
		});
	  };
	handleClick(event){
		console.log(this.state,this.props);
		//this.props.history.push('#')
		event.preventDefault();

	}
	render() {
		const { classes } = this.props;


		return (
			<div>
				<AppBar position="relative" className={classes.appbar}>
					<Grid justify="center" container>
						<Typography
							className={classes.dense}
							variant='title'
							color='inherit'>
							LOGIN
						</Typography>
					</Grid>
				</AppBar>
				<form className={classes.container}>
					<Grid justify="center" container className={classes.dense}>
						<Grid container justify="center">
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
								Login
      						</Button>
						</Grid>
					</Grid>

				</form>
			</div>
		);
	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Login);

{/* <TextField
						id="outlined-name"
						label="Name"
						className={classes.textField}
						value={this.state.name}
						onChange={this.handleChange("name")}
						margin="normal"
						variant="outlined"
					/>
					<TextField
						required
						id="outlined-required"
						label="Required"
						defaultValue="Hello World"
						className={classes.textField}
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="outlined-email-input"
						label="Email"
						className={classes.textField}
						type="email"
						name="email"
						autoComplete="email"
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="outlined-password-input"
						label="Password"
						className={classes.textField}
						type="password"
						autoComplete="current-password"
						margin="normal"
						variant="outlined"
					/> */}