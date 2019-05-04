
import React, { Component } from 'react'
import { Typography, Grid, withStyles, Hidden } from '@material-ui/core'
import { EventCard, EventMapBox } from '../../components'
import { styles } from './ExploreEvents.styles';
import { Marker } from 'react-map-gl';
import { Icon } from 'semantic-ui-react'

class ExploreEvents extends Component {

  render() {
    const { classes, meetupEvents,gridMarker, Fetched,handleMouseOut,handleMouseOver } = this.props
    
    
    
    const renderMeetupEvents = () => {
      console.log("meetUp", meetupEvents)
      let events
      if (Fetched && meetupEvents.events.length) {
        events = meetupEvents.events.map((event, index) => (

          <Grid className={classes.item_grid} item key={index}>
            <EventCard 
            event={event} 
            handleMouseOut={handleMouseOut}
            handleMouseOver={handleMouseOver} 
            cardId={index} />
          </Grid>


        ))
      }
      return events

    }

    const renderMarkers = () => {
      
      
      if (Fetched && meetupEvents.events.length) {
        let markers = meetupEvents.events.map((event, index) => {
          //markerDict.push(false)
          return (
            <Marker
              longitude={event.group ? event.group.lon : event.venue.lon}
              latitude={event.group ? event.group.lat : event.venue.lat}
              offsetLeft={-20} offsetTop={-10}
              key={index}
            >
              <Icon color={gridMarker[index]? "red":"blue"} size="large" name="comment" />
              {console.log(event.group ? event.group.lon : event.venue.lon)}
              {console.log(event.group ? event.group.lat : event.venue.lat)}
              {console.log(gridMarker[index])}
            </Marker>
          )
        })
        //this.updateState(markerDict)
        return (markers)
      }
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
                <EventMapBox showMarkers={Fetched} width={900} height={650} meetupEvents={renderMarkers} />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ExploreEvents)