import React, { Component } from 'react'
import { Header } from '../../components'
import { AuthContext } from '../../contexts/Auth.context'
import { AUTH_TOKEN } from '../../constants';
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
      this.setState({ loginOpen: false })
    } else if (modal === 'register') {
      this.setState({ registerOpen: false })
    }
  }

  handleOpen(modal) {
    if (modal === 'login') {
      this.setState({ loginOpen: true })
    } else if (modal === 'register') {
      this.setState({ registerOpen: true })
    }
  }

  handleLogout() {
    //this.context.onLogout();
    localStorage.removeItem(AUTH_TOKEN)
    console.log(History)
  }

  render() {

    return (
      <Header handleLogout={this.handleLogout} />
    )
  }
}

export default headerWrapper
