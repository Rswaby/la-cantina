/** @format */

import React, { Component } from 'react'
import { EventDescription } from '../../components'
import { getEvent, getEventPhotos } from '../../fetches'

class EventDescrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: '',
      eventPhotos: '',
      fetched: false,
      status: false,
      attendCount: ''
    }
    this.handleJoinEvent = this.handleJoinEvent.bind(this);

  }

  componentDidMount() {
    //console.log('component did mount', this.props)
    const { eventid, eventurl } = this.props.match.params

    if (eventid && eventurl) {
      console.log("Inside event fetch")
      // get status from localStorage
      const status = localStorage.getItem(eventid) ? localStorage.getItem(eventid) : false;
      getEvent(eventid, eventurl).then(data => {
        this.setState({
          eventDetails: data.response,
          fetched: true,
          attendCount: data.response.yes_rsvp_count,
          ...status
        })
      })

      getEventPhotos(eventurl).then(data => {
        this.setState({
          eventPhotos: data.response
        })
      })

    }
  }

  handleJoinEvent() {
    console.log("status: ", this.state.status);
    let { attendCount } = this.state;
    const status = localStorage.getItem(this.props.match.params.eventid);
    attendCount = this.state.status ? attendCount - 1 : attendCount + 1
    localStorage.setItem(this.props.match.params.eventid, !this.state.status);
    this.setState({
      status: !this.state.status,
      attendCount:attendCount
    })
  }

  render() {
    const { fetched, eventDetails,attendCount } = this.state;
    let day, DateTime;
    if (fetched && eventDetails) {
      day = eventDetails.local_date.split("-")
      DateTime = new Date(day[0], day[1] - 1, day[2])
    }
    console.log("container ", eventDetails)
    return (
      <div>
        {fetched && eventDetails ? <EventDescription
          address={eventDetails.venue ? eventDetails.venue.address_1 : "no address provided"}
          attending={null}
          category={null}
          capacity={attendCount}
          DateTime={DateTime}
          description={eventDetails.description}
          name={eventDetails.name}
          organizer={null}
          handleJoinEvent={this.handleJoinEvent}
          //eventid={this.props.match.params.eventid}
          status={this.state.status}
        /> : <div>loading ...</div>
        }
      </div>
    )
  }
}

export default EventDescrip
