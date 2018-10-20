
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// more components at https://material-ui.com/getting-started/usage/

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
      user: {
        email: "",
        password: "",
      },
    }
		
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) { // update state on input change

	}

	handleSubmit(event) { // submit user state as json body

	}

	render() {
		return (
			<div>
				<h3>Login page</h3>
			</div>
		)
	}
}
