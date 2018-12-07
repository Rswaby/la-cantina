/** @format */

import React, {Component} from 'react'

import {Header} from '../../components'
import {AuthContext} from '../../contexts/Auth.context'

class headerWrapper extends Component {
  static contextType = AuthContext

  constructor(props) {
    super(props)
    this.state = {
      loginOpen: false,
      registerOpen: false,
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleClose(modal) {
    if (modal === 'login') {
      this.setState({loginOpen: false})
    } else if (modal === 'register') {
      this.setState({registerOpen: false})
    }
  }

  handleOpen(modal) {
    if (modal === 'login') {
      this.setState({loginOpen: true})
    } else if (modal === 'register') {
      this.setState({registerOpen: true})
    }
  }

  handleLogout() {
    //this.context.onLogout();
    alert('Logout')
    this.handleClose('login')
  }

  render() {
    //  const { user } = this.context;
    const user = ''
    console.log('User', user)
    return (
      <Header
        {...this.state}
        user={user}
        handleModalClose={this.handleClose}
        handleModalOpen={this.handleOpen}
        handleLogout={this.handleLogout}
      />
    )
  }
}

export default headerWrapper
