/** @format */

import React, {Component} from 'react'
// import { EventCard } from './EventCard';
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import {Typography, Grid, withStyles, Divider, Toolbar} from '@material-ui/core'
import {EventCard} from '../../components'
import {EventMap} from './EventMap'

const styles = theme => ({
  main_grid: {
    'margin-top': 20,
  },
  item_grid: {
    'margin-top': 5,
  },
  date_group: {
    'top-padding': 30,
  },
  typo_margin: {},
  media: {
    height: 90,
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  },
})

class ExploreEvents extends Component {
  render() {
    const {EventsData, classes} = this.props
    console.log('Events Data', EventsData)
    //remove production map when pushing
    const prod = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }&libraries=geometry,drawing,places`
    const developmentMap = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
    const mapurl = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? prod : developmentMap

    const renderEventCardGrid = () => {
      let events

      if (EventsData.length) {
        events = EventsData.map((event, index) => (
          <div key={index} className={classNames(classes.column, classes.helper)}>
            <Grid className={classes.item_grid} item sm={12}>
              <EventCard event={event} />
            </Grid>
          </div>
        ))
      } else {
        events = <div className={this.props.classes.root}>{'No Results for this query.'}</div>
      }
      //console.log("events", events)
      return events
    }
    //console.log(googleurl);
    return (
      <div>
        <Grid className={classes.main_grid} container>
          <Grid item sm={6}>
            {renderEventCardGrid()}
          </Grid>
          <Grid item sm={6}>
            <Typography align="center" variant="subheading">
              Google Map
            </Typography>
            <EventMap
              isMarkerShown
              googleMapURL={mapurl}
              loadingElement={<div style={{height: `100%`}} />}
              containerElement={<div style={{height: `800px`}} />}
              mapElement={<div style={{height: `${EventsData.length > 11 ? 340 : 100}%`}} />}
              EventsData={EventsData}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ExploreEvents)
