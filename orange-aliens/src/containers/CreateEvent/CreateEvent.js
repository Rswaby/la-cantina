
import React, { Component } from 'react';

import { CreateEvent } from '../../components';
//import { AuthContext } from '../contexts/Auth.context';

class CreateEventWapper extends Component {
  //static contextType = AuthContext;

  render() {
    return (
        <CreateEvent />
    )
  }
}

export default CreateEventWapper;