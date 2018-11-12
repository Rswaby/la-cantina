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




    render() {
        const { EventsData, classes } = this.props;
        const apiKey='AIzaSyCkHFtWKtuMS5JPO0fubUEzIy_39OtXw_M';
        const googleurl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=geometry,drawing,places`

        const renderEventCardGrid = () => {
            const events = EventsData.map((event) =>
                <div className={classNames(classes.column, classes.helper)}>
                    <Grid className={classes.item_grid} item sm={12} >
                        <EventCard event={event} />
                    </Grid>
                </div>
            );
            return (events);
        }
        console.log(googleurl);
        return (
            <div>
                <Grid className={classes.main_grid} container sm={12}>
                    <Grid item sm={6}>
                        {renderEventCardGrid()}
                    </Grid>
                    <Grid item justify="center" sm={6}>
                        <Typography align="center" variant="subheading">
                            Google Map 
                        </Typography>
                        <EventMap
                            isMarkerShown
                            googleMapURL= {googleurl}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height:`800px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ExploreEvents);