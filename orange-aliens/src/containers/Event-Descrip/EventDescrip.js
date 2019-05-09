/** @format */

import React, { Component } from 'react'
import { EventDescription } from '../../components'
import { getEvent, getEventPhotos } from '../../fetches'

class EventDescrip extends Component {
  state = {
    eventDetails: '',
    eventPhtotos: '',
    fetched: false
  }

  componentDidMount() {
    //console.log('component did mount', this.props)
    const { eventid, eventurl } = this.props.match.params

    if (eventid && eventurl) {
      console.log("Inside event fetch")
      getEvent(eventid,eventurl).then(data=>{
        this.setState({
          eventDetails:data.response,
          fetched:true
        })
      })

      getEventPhotos(eventurl).then(data=>{
        this.setState({
          eventPhtotos:data.response
        })
      })

    }
  }
  render() {
    const { fetched, eventDetails} = this.state;
    let day,DateTime;
    if (fetched && eventDetails) {
      day = eventDetails.local_date.split("-")
      DateTime = new Date(day[0], day[1] - 1, day[2])
    }
    console.log("container ", eventDetails)
    return (
      <div>
        {fetched && eventDetails ? <EventDescription
          address={eventDetails.venue ? eventDetails.venue.address_1 : "no address provided"  }
          attending={null}
          category={null}
          capacity={eventDetails.yes_rsvp_count}
          DateTime={DateTime}
          description={eventDetails.description}
          name={eventDetails.name}
          organizer={null}
        /> : <div>loading ...</div>
        }
      </div>
    )
  }
}

export default EventDescrip
