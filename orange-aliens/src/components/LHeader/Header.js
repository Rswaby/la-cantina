import React, { Component } from 'react';

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class Header extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };



  render() {
    let backdrop;
    const { sideDrawerOpen } = this.state

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} handleLogout={this.props.handleLogout} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default Header;

/*
 *<div style={{height: '100%'}}>
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
    <SideDrawer show={this.state.sideDrawerOpen} />
    {backdrop}
  </div>
 */