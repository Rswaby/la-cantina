
import React, { Component } from 'react';

import { Login } from '../../components';
//import { AuthContext } from '../contexts/Auth.context';

class loginWrapper extends Component {
  //static contextType = AuthContext;

  render() {
    return (
      <Login {...this.props}/>
    )
  }
}

export default loginWrapper;