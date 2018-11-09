
import React, { Component } from 'react';

import App from '../../App';
//import { fetchCategories } from '../fetches';
//import { AuthContext } from '../contexts/Auth.context';

class appWrapper extends Component  {
  //static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      registerOpen: false,
    }
    this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
  }
  
  componentDidMount() {
    // fetchCategories().then(response => {
    //   this.setState({ categories: response.results });
    // })
  }

	handleClose() { this.setState({ registerOpen: false})}
	handleOpen() { this.setState({ registerOpen: true})}

  render() {
    //const { user } = this.context;
    return ( 
      <App 
      {...this.props}
      {...this.state} 
      //user={user}
      handleModalClose={this.handleClose}
      handleModalOpen={this.handleOpen}
      handleLogout={this.handleLogout}
       />
    )
  }
}

export default appWrapper;