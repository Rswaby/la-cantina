import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const EventMap = withScriptjs(withGoogleMap((props) => {
    console.log("map props[0]",props);
    let renderMarkers = () =>{
        let makrs = props.markerCoordinates.map((coordinate)=> <Marker position={coordinate}/>)
        return(makrs)
    }
    return (
        <GoogleMap
            defaultZoom={12}
            defaultOptions={{ scrollwheel: false, }}
            defaultCenter={{ lat: 40.785091, lng: -73.968285 }} >
            {props.isMarkerShown && renderMarkers()}
        </GoogleMap>
    )}
))
