import React, { Component } from 'react'
import { LHeader } from '../../components'
import { AuthContext } from '../../contexts/Auth.context'
import { AUTH_TOKEN } from '../../constants';
import {
  withRouter
} from 'react-router-dom'

class headerWrapper extends Component {
  static contextType = AuthContext

  constructor(props) {
    super(props)
    this.state = {
      loginOpen: false,
      registerOpen: false,
    }
  }

  handleLogout = (USER) => {
    console.log(USER)
    localStorage.removeItem(AUTH_TOKEN)
    this.props.history.push('/')
  }

  render() {    
    return (
      <LHeader handleLogout={this.handleLogout} />
    )
  }
}

export default withRouter(headerWrapper)
