import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const EventMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 40.785091, lng: -73.968285 }} >
        {props.isMarkerShown && <Marker position={{ lat:  40.785091, lng: -73.968285  }} />}
    </GoogleMap>
))
