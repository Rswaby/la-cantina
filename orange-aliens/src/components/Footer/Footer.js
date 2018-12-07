/** @format */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '20px',
  },
})

class Footer extends Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
      </div>
    )
  }
}

export default Footer
