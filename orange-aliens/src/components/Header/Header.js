
import React from 'react';
import { Link } from 'react-router-dom';
import {
	Button, AppBar, Typography, Toolbar, withStyles,
	Modal, Divider,AccountCircle
} from '@material-ui/core';
import { Login, Register } from '../../containers';
import PropTypes from 'prop-types';

const styles = theme => ({
	title: {
		'&:hover': {
			backgroundColor: theme.palette.primary,
			color: 'white',

		},
	},
	divide: { flex: 1 },
	right_actions: {
		display: 'flex',
		flex: -1,
	},
	user_name: {
		marginRight: theme.spacing.unit,
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	loginPaper: {
		position: 'absolute',
		left: '50%',
		width: '600px',
		height: '50%',
		backgroundColor: theme.palette.background.paper,
		transform: 'translate(-50%, 50%)',
	},
	registerPaper: {
		position: 'absolute',
		left: '50%',
		width: '700px',
		height: '60%',
		backgroundColor: theme.palette.background.paper,
		transform: 'translate(-50%, 40%)',
	},
	appbar:{
		backgroundColor:'#B8BED9',
		height:'50px'
	},
	// icon: {
	// 	margin: theme.spacing.unit * 2,
	//   },
	//   iconHover: {
	// 	margin: theme.spacing.unit * 2,
	// 	'&:hover': {
	// 	  color: red[800],
	// 	},
	//   },

})

export function Header({
	user, handleLogout, classes, handleModalClose,
	handleModalOpen, loginOpen, registerOpen
}) {
	return (
		<AppBar position="relative" color="blue" className={classes.appbar}>
			<Toolbar>
				<Typography	
					style={{ textDecoration: 'none' }}
					component={Link}
					to ="/explore"
					className={classes.title}
					variant='title'
					color='inherit'>
					Home
				</Typography>
				<div className={classes.divide} />
				{user ? ( 
					<div className={classes.right_actions}>
						{/* <Avatar></Avatar>*/}
						<Typography
							margin='10px'
							className={classes.user_name}
							variant='subtitle1'
							color='inherit'>
							{user.owner.first_name}
						</Typography>
						<Button 
							className={classes.logout_button}
							color='inherit'
							children="logout"
							onClick={() => handleLogout()}
						/>
					</div>
				) : (
					<div>
						<Button
							onClick={() => handleModalOpen('login')}
							className='login-button'
							children="Login"
							color='inherit' />
						<Button 
							onClick={() => handleModalOpen('register')}
							className='register-button'
							color='inherit'
							children="Register"
						/>
						<Modal open={loginOpen} onClose={() => handleModalClose('login')}>
							<div className={classes.loginPaper}>
								<Login />
							</div>
						</Modal>
						<Modal open={registerOpen} onClose={() => handleModalClose('register')}>
							<div className={classes.registerPaper}>
								<Register handleModalClose={handleModalClose} />
							</div>
						</Modal>
					</div>
				)}
		</Toolbar>
	</AppBar>
	)
}
	
Header.propTypes = { 
	user: PropTypes.object,
	handleLogout: PropTypes.func,
}

Header.defaultProps = {
	user: null,
	handleLogout: undefined,
}

export default withStyles(styles)(Header);