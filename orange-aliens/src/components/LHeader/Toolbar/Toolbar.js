import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { AUTH_TOKEN } from "../../../constants";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import './Toolbar.css';

const styles = theme => ({
  right_actions: {
    display: 'flex',
    flex: -1,
  }
});

const Toolbar = ({classes, handleLogout, drawerClickHandler}) => {
  const authuser = localStorage.getItem(AUTH_TOKEN);
  return (
  <header className="toolbar">
    {/* If the user is logged in they see this */}
    {authuser ? (
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">Link Up</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li><a href="/">Discover Neighborhoods</a></li>
            <li><a href="/explore">Explore Events</a></li>
            <li><a href children="logout" onClick={() => handleLogout()}> Logout</a></li>
          </ul>
        </div>
      </nav>
    ):(
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">Link Up</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <div className={classes.right_actions}>
            <ul>
              <li><a href="/">Discover Neighborhoods</a></li>
              <li><a href="/explore">Explore Events</a></li>
              <li><a className="login-button" href="/auth" children="Login">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )}
    {/* Everything after the colon is what the user sees if the user isn't signed in */}
  </header>
)};

Toolbar.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func,
};

Toolbar.defaultProps = {
  user: null,
  handleLogout: undefined,
};


export default withStyles(styles)(Toolbar);
