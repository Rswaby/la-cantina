/** @format */

import React from 'react';
import {Link} from 'react-router-dom';
import {Button, AppBar, Typography, Toolbar, withStyles, Modal, Divider, AccountCircle} from '@material-ui/core';
import PropTypes from 'prop-types';
import { AUTH_TOKEN } from "../../constants";

const styles = theme => ({
  title: {
    '&:hover': {
      backgroundColor: theme.palette.primary,
      color: 'white',
    },
  },
  divide: {flex: 1},
  right_actions: {
    display: 'flex',
    flex: -1,
  },
  user_name: {
    marginRight: theme.spacing.unit,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  loginPaper: {
    position: 'absolute',
    left: '50%',
    width: '600px',
    height: '50%',
    backgroundColor: theme.palette.background.paper,
    transform: 'translate(-50%, 50%)',
  },
  registerPaper: {
    position: 'absolute',
    left: '50%',
    width: '700px',
    backgroundColor: theme.palette.background.paper,
    transform: 'translate(-50%, 40%)',
  },
  appbar: {
    backgroundColor: 'teal',
    height: '60px',
  },
});

export function Header({ classes, handleLogout}) {
  const authuser = localStorage.getItem(AUTH_TOKEN)
  return (
    <AppBar position="relative" className={classes.appbar}>
      <Toolbar>
        <Typography
          style={{textDecoration: 'none'}}
          component={Link}
          to="/"
          className={classes.title}
          variant="button"
          color="inherit">
          Home
        </Typography>
        <div className={classes.divide} />
        {authuser ? (
          <div className={classes.right_actions}>
            <Button
              className={classes.logout_button}
              color="inherit"
              children="logout"
              onClick={() => handleLogout()}
            />
          </div>
        ) : (
          <div>
            <Button color="inherit" href="/createEvent">
              {' '}
              create event{' '}
            </Button>
            <Button color="inherit" href="/explore">
              {' '}
              Explore Events{' '}
            </Button>
            <Button
              href="/auth"
              className="login-button"
              color="inherit"
              children="Login"
            />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  handleLogout: undefined,
};

export default withStyles(styles)(Header);
