import React, { Component } from 'react';


import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {
     Typography, Grid, withStyles, Divider, Toolbar
 } from '@material-ui/core';

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
    constructor(props){
        super(props);
    }


    render() {
        const { EventsData } = this.props;
        console.log(EventsData);
        return (
            <div>
                <h4>ExploreEvents</h4>
            </div>
        )
    }
}

export default ExploreEvents;