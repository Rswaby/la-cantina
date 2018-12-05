import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	withStyles,

} from '@material-ui/core';
import './App.css';
import { EventMap } from './components/ExploreEvents/EventMap';
import { LandingPage } from './containers';


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
		console.log("Auth Props", this.props);
		return (
			<div className='App'>
				<LandingPage />
			</div>
		);
	}
}

export default withStyles(styles)(App);
