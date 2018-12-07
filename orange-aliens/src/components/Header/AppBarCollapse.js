/** @format */

import React, {Component} from 'react'
import {withStyles} from '@material-ui/core'
import ButtonAppBarCollapse from './ButtonAppBarCollapse'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    position: 'absolute',
    right: 0,
  },
  wrapper: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    margin: '10px',
    paddingLeft: '16px',
    right: 0,
    position: 'relative',
    width: '100%',
    background: 'transparent',
  },
  listContainer: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  listMenu: {
    float: 'left',
  },
  listItems: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '6px 8px',
  },
})

class AppBarCollapse extends Component {
  state = {
    visible: false,
  }
  redner() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <ButtonAppBarCollapse dataTarget="#appbar-collapse" />
        <div className="this.props.classes.wrapepr" id="appbar-collapse">
          <ul className={classes.listContainer} id="list-appbar-collapse">
            <li className={classes.listMenus}>
              <a className={classes.listItems}>Login</a>
            </li>
            <li className={classes.listMenus}>
              <a className={classes.listItems}>Register</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

AppBarCollapse.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppBarCollapse)
