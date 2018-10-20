
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Button, AppBar, Typography,
	Toolbar, withStyles
} from '@material-ui/core';

class Header extends Component {

	render() {

		return (
			<AppBar position='static'>
				<Toolbar className="blue">
					<Typography  style={{flex: 1}} variant='headline' color='inherit'>
						La Cantina
					</Typography>
					<Button component={Link} to="/login" children="Login" className='login-button' color='inherit' />
					<Button component={Link} to="/register" children="Register" className='register-button' color='inherit'/>
				</Toolbar>
			</AppBar>
		)
	}
}

export default Header;
