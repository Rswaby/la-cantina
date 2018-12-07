/** @format */

import React, {Component} from 'react'
import {withStyles} from '@material-ui/core'
import {IconButton} from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    margin: '10px',
    boxShadow: 'none',
  },
})

class ButtonAppBarCollapse extends Component {
  state = {
    wrapper: this.props.dataTarget.replace(/#/, ''),
    listMenus: this.props.menu,
  }

  toggleCollapse(e) {
    e.preventDefault()
    let collapsed = document.getElementById(this.state.wrapper)
    if (collapsed.style.display === 'block') {
      collapsed.style.display = 'none'
    } else {
      collapsed.style.display = 'block'
      collapsed.style.backgroundColor = '#fff'
      collapsed.style.top = '50px'
      collapsed.style.text.Align = 'center'
      collapsed.style.width = '240px'
      collapsed.style.position = 'absolute'
      collapsed.style.zIndex = 1450
    }
  }
  render() {
    return (
      <IconButton className={this.props.classes.buttonCollapse} onClick={this.toggleCollapse}>
        <b className="mdi mdi-home" />
      </IconButton>
    )
  }
}

ButtonAppBarCollapse.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBarCollapse)
