import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';


const colors = [
    '#FF8C00', '#C8537B', '#6992C2', '#369939',
    '#0C88C2', '#16623A', '#5C1E26', '#4A233',
    '#800000', '#F94B1E', '#C8537B', '#FBEA86',
    '#C6162B', '#E4A42E', '#999333', '#937D62'
];


const styles = {
    root: {
        background: '#4A2339',
        height: 130,
        width: 280,
        color: '#FFFFFF'
    }
};

const EventCategoryCard = (props) => {
    const { classes, ...other } = props;

    return (
        <div>
            <Button variant='contained' size='large' disableRipple={true} className={classNames(classes.root)} {...other}>
                {/*<Typography variant='button' color='error'>
                    { props.categoryName }
                </Typography> */}
                { props.categoryName }
            </Button>
        </div>
    );
};

EventCategoryCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EventCategoryCard);

/*
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

const EventCategoryCard = (props) => {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h6'>
                    { props.eventName }
                </Typography>
            </Paper>
        </div>
    );
}

EventCategoryCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCategoryCard);
*/
