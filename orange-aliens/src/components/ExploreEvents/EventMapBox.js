import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
class EventMapBox extends Component {

  state = {
    viewport: {
      latitude: 40.730610,
      longitude: -73.935242,
      zoom: 9
    }
  };

  render() {
    const { width, height } = this.props
    return (
      <ReactMapGL
        {...this.state.viewport}
        width={width}
        height={height}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
      />
    );
  }
}

export default EventMapBox;