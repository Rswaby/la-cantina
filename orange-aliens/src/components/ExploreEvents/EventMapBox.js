import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Icon } from 'semantic-ui-react'
class EventMapBox extends Component {

  state = {
    viewport: {
      latitude: 40.730610,
      longitude: -73.935242,
      zoom: 11
    }
  };

  render() {
    const { width, height, meetupEvents, showMarkers} = this.props
    const renderMarkers = () => {
      let markers = meetupEvents.events.map((event, index) => {
        return (
          <Marker
            longitude={event.group? event.group.lon : event.venue.lon}
            latitude={event.group? event.group.lat: event.venue.lat}
            offsetLeft={-20} offsetTop={-10}
            key={index}
          >
            <Icon color="blue" size="large"  name="comment" />
            {console.log(event.group? event.group.lon : event.venue.lon)}
            {console.log(event.group? event.group.lat: event.venue.lat)}
          </Marker>
        )
      })
      return (markers)
    }

    return (
      <ReactMapGL
        {...this.state.viewport}
        width={width}
        height={height}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        mapStyle={'mapbox://styles/mapbox/outdoors-v11'}
      >
        {showMarkers && renderMarkers()}
      </ReactMapGL>
    );
  }
}

export default EventMapBox