import React, { Component } from 'react';
// import { EventCard } from './EventCard';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {
    Typography, Grid, withStyles, Divider, Toolbar
} from '@material-ui/core';
import { EventCard } from '../../components';
import { EventMap } from './EventMap';

const styles = theme => ({
    main_grid: {
        "margin-top": 20,
    },
    item_grid: {
        "margin-top": 5,
    },
    date_group: {
        "top-padding": 30,
    },
    typo_margin: {
    },
    media: {
        height: 90,
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
});



class ExploreEvents extends Component {
    constructor(props) {
        super(props);
    }

    Mapmarker() {

        return (
            [
                { lat: 40.852905, lng: -73.872971 },
                { lat: 40.7229, lng: -73.9988 },
                { lat: 42.3917638, lng: -71.0328284 },
                { lat: 40.754932, lng: -73.984016 },
                { lat: 40.763186, lng: -73.994508 },
                { lat: 40.785946, lng: -73.974187 },
                { lat: 40.7478792, lng: -73.9756567 },
                { lat: 40.758896, lng: -73.985130 },
            ]
        )
    }


    render() {
        const { EventsData, classes } = this.props;
        //remove production map when pushing 
        // const apiKey = 'AIzaSyCkHFtWKtuMS5JPO0fubUEzIy_39OtXw_M';
        // const googleurl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry,drawing,places`
        const developmentMap = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places";
        const renderEventCardGrid = () => {
            const events = EventsData.map((event, index) =>
                <div key={index} className={classNames(classes.column, classes.helper)}>
                    <Grid className={classes.item_grid} item sm={12} >
                        <EventCard event={event} />
                    </Grid>
                </div>
            );
            return (events);
        }
        //console.log(googleurl);
        return (
            <div>
                <Grid className={classes.main_grid} container>
                    <Grid item sm={6}>
                        {renderEventCardGrid()}
                    </Grid>
                    <Grid item sm={6}>
                        <Typography align="center" variant="subheading">
                            Google Map
                        </Typography>
                        <EventMap
                            isMarkerShown
                            googleMapURL={developmentMap}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `800px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            OtherProps={"Test prop"}
                            markerCoordinates={this.Mapmarker()}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ExploreEvents);