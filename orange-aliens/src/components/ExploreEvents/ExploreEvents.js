
import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Typography, Grid, withStyles, Hidden, List } from '@material-ui/core'
import { EventCard, EventMapBox } from '../../components'
import { EventMap } from './EventMap'
import { styles } from './ExploreEvents.styles';

class ExploreEvents extends Component {

  render() {
    const { EventsData, classes, meetupEvents, Fetched } = this.props
    console.log("From Meetup Api: ", meetupEvents)
    const prod = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      }&libraries=geometry,drawing,places`
    const developmentMap = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
    //const mapurl = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? prod : developmentMap
    const mapurl = developmentMap
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
      return events
    }

    const renderMeetupEvents = () => {
      console.log("meetUp", meetupEvents)
      let events
      if (Fetched && meetupEvents.events.length) {
        events = meetupEvents.events.map((event, index) => (
          <Grid className={classes.item_grid} container>
            {/*<EventCard/>*/}
            {event.name}
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
            {renderEventCardGrid()}
          </Grid>
          <Hidden smDown xsDown mdDown>
            <Grid item sm={12} md={6} xs={12} lg={6} >
              <div style={{ position: "fixed" }}>
                <Typography align="center" variant="subheading">
                  New York
              </Typography>
                <EventMapBox width={800} height={600} />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ExploreEvents)
// <EventMap
//                 isMarkerShown
//                 googleMapURL={mapurl}
//                 loadingElement={<div style={{ height: `100%` }} />}
//                 containerElement={<div style={{ height: `800px` }} />}
//                 mapElement={<div style={{ height: `${EventsData.length > 11 ? 340 : 100}%` }} />}
//                 EventsData={EventsData}
//               />