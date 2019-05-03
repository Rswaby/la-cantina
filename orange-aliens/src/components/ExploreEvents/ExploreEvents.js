
import React, { Component } from 'react'
import { Typography, Grid, withStyles, Hidden } from '@material-ui/core'
import { EventCard, EventMapBox, Card2 } from '../../components'
import { styles } from './ExploreEvents.styles';

class ExploreEvents extends Component {

  render() {
    const { classes, meetupEvents, Fetched } = this.props

    const renderMeetupEvents = () => {
      console.log("meetUp", meetupEvents)
      let events
      if (Fetched && meetupEvents.events.length) {
        events = meetupEvents.events.map((event, index) => (

          <Grid className={classes.item_grid} item key={index}>
            <EventCard event={event} />
          </Grid>


        ))
      }
      return events

    }


    return (
      <div>
        <Grid className={classes.main_grid} container>
          <Grid item sm={12} md={6} xs={12} lg={6}>
            {renderMeetupEvents()}
          </Grid>
          <Hidden smDown xsDown>
            <Grid item sm={12} md={6} xs={12} lg={6} >
              <div style={{ position: "fixed" }}>
                <Typography align="center" variant="subheading">
                  New York
              </Typography>
                <EventMapBox showMarkers={Fetched} width={900} height={650} meetupEvents={meetupEvents} />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ExploreEvents)