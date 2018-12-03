
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button, withStyles, Typography,
    Modal,
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Register } from '../../containers';

import { newyork3, newyork4, } from '../../images';

const images = [newyork3, newyork4]

const styles = theme => ({
    banner_button: {
        position: 'absolute',
        width: '25%',
        top: '40%',
        left: '50%',
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: 'white',
        },
        transform: 'translate(-50%, 50%)',
        color: 'white',
    },
    banner_text: {
        position: 'absolute',
        width: 'auto',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, 50%)',
        color: "white",
    },
    banner: {
        height: 400,
        width: '100%',
        "object-fit": 'cover'
    },
    registerPaper: {
        position: 'absolute',
        left: '50%',
        width: '700px',
        height: '60%',
        backgroundColor: theme.palette.background.paper,
        transform: 'translate(-50%, 40%)',
    }
})

const Wrapped = autoPlay(SwipeableViews);

const Banner = (props) => (
    <div>
        <div>
            <img className={props.classes.banner}
                src={newyork4}
                alt='banner' />
        </div>
        <Typography
            className={props.classes.banner_text} variant='h3' noWrap>
            Create Event
        </Typography>
    </div>
)

export default withStyles(styles)(Banner);