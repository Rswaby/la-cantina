import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';


// some nice colors
const colors = [
    '#FF8C00', '#C8537B', '#6992C', '#36993',
    '#0C88C', '#16623A', '#5C1E26', '#4A233',
    '#800000', '#F94B1E', '#C8537B', '#FBEA86',
    '#C6162B', '#E4A42E', '#999333', '#937D62'
];

const styles = {
    root: {
        background: '#003CFF',
        height: 130,
        color: '#FFFFFF',
    }
};

const EventCategoryCard = (props) => {
    const { classes, ...other } = props;

    return (
        <div>
            <Button variant='contained' fullWidth={true} disableRipple={true} className={classNames(classes.root)} {...other}>
                <Typography variant='button' color='inherit'>
                    { props.categoryName }
                </Typography>
            </Button>
        </div>
    );
};

EventCategoryCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EventCategoryCard);
