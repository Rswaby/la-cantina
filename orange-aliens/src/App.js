import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Card, CardContent, Typography, 
	Grid, withStyles, CardMedia,
	CardActionArea,
} from '@material-ui/core';
import './App.css';
//import LandingPage from './components/LandingPage/LandingPage';

const styles = theme => ({
	main_grid: {
		"margin-top": 20,
	},
	card: {
	},
	media: {
		height: 200,
	},
})

export class App extends Component {

  render() {
		const { classes, user,
			handleModalClose, handleModalOpen } = this.props;
    return (
			<div className='App'>
			</div>
    );
  }
}

export default withStyles(styles)(App);
