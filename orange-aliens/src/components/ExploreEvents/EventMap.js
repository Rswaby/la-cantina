import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const EventMap = withScriptjs(withGoogleMap((props) => {
    console.log("map props[0]", props);

    let renderMarkers = () => {
        let markers = props.EventsData.map((event) => {
            console.log(event)
            return (<Marker position={{ lat: event.latitude, lng: event.longitude }} />)
        })
        return (markers)
    }
    return (
        <GoogleMap
            defaultZoom={10}
            defaultOptions={{ scrollwheel: false, }}
            defaultCenter={{ lat: 40.785091, lng: -73.968285 }} >
            {props.isMarkerShown && renderMarkers()}
        </GoogleMap>
    )
}
))
