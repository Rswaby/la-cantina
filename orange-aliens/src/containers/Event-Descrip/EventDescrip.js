/** @format */

import React, {Component} from 'react'
import {EventDescription} from '../../components'
import {getEvents} from '../../fetches'

class EventDescrip extends Component {
  state = {
    result: [],
  }

  componentDidMount() {
    console.log('component did mount', this.props)
    const {eventid} = this.props.match.params

    getEvents(eventid).then(response => {
      console.log('Response', response)
      this.setState({
        result: response,
      })
      console.log('done')
    })
  }
  render() {
    const {address, attending, category, capacity, date_time, description, name, organizer} = this.state.result
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
