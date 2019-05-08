/** @format */

import React, { Component } from 'react'
import { EventDescription } from '../../components'
import { getEvent } from '../../fetches'

class EventDescrip extends Component {
  state = {
    result: [],
  }

  componentDidMount() {
    console.log('component did mount', this.props)
    const { eventid, eventurl } = this.props.match.params

    if (eventid && eventurl) {
      getEvent(eventid, eventurl).then(response => {
        console.log('Response', response)
        this.setState({
          result: response,
        })
        console.log('done')
      })
    }
  }
  render() {
    const { address, attending, category, capacity, date_time, description, name, organizer } = this.state.result
    console.log('LOLstate', this.state.result)
    return (
      <div>
        <EventDescription
          address={address}
          attending={attending}
          category={category}
          capacity={capacity}
          DateTime={date_time}
          description={description}
          name={name}
          organizer={organizer}
        />
      </div>
    )
  }
}

export default EventDescrip
