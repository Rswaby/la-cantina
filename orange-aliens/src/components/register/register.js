import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// more components at https://material-ui.com/getting-started/usage/

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      applicant: {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
				school: "",
				major: "",
				address: "", // probably more, not final
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

	handleChange() { // update state on input change

	}

	handleSubmit() { // submit user state as json body

	}

	render() {
		return (
			<div>
				<h3>register page</h3>
			</div>
		)
	}
}
