/** @format */

import React, {Component} from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import moment from 'moment';
import {AccountCircle} from '@material-ui/icons';
import EventCarousel from '../Carousel/Carousel';
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
  },
  bodySection: {
    backgroundColor: '#F6F7F8',
  },
});

class EventDescription extends Component {
  render() {
    const {address, attending, capacity, classes, date_time, description, name, organizer} = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={8}
          direction="column"
          alignItems="center"
          justify="center"
          style={{minHeight: '100vh'}}>
          <Grid container item xs={12} spacing={24}>
            <React.Fragment>
              {/* Event Header */}
              <Grid item lg={8} md={6} xs={12}>
                <Grid item style={{marginTop: '33px'}}>
                  <Typography variant="display2">{name}</Typography>
                  <Typography>
                    {/* Insert organizer icon */}
                    <p>{organizer ? `Organizer: ${organizer.first_name} ${organizer.last_name}` : 'God'} </p>
                    {/* Insert location icon */}
                    <p>{`Address: ${address}`}</p>
                    {/* Clock icon */}
                    <p>{`Date: ${moment(date_time).format('dddd, MMMM Do YYYY')}`}</p>
                    <p>{`Time: ${moment(date_time).format(' hh:mm a')}`}</p>
                  </Typography>
                </Grid>
              </Grid>
              {/* Join Event */}
              <Grid item lg={4} md={6} xs={12} spacing={8}>
                <Grid
                  item
                  alignItems="center"
                  justify="center"
                  style={{marginTop: '33px', width: '200px', height: '100px', textAlign: 'center'}}>
                  <Typography variant="h6" align="center" gutterBottom>
                    Come through! {capacity ? `Capacity: ${capacity}` : 0}
                  </Typography>
                  <p>
                    <Button variant="contained" color="primary">
                      Link Up
                    </Button>
                  </p>
                </Grid>
              </Grid>
              {/* Photos Section */}
              <Grid item lg={8} md={12} xs={12} className={classes.bodySection}>
                <EventCarousel />
              </Grid>
              {/* Map and Calender Section */}
              <Grid item lg={4} md={6} xs={12} className={classes.bodySection}>
                <Grid item alignItems="center" justify="center" className={classes.body}>
                  <Calendar value={date_time} style={{marginRight: '30px'}} />
                </Grid>
              </Grid>
              {/* Description Section */}
              <Grid item lg={8} md={6} xs={12} className={classes.bodySection}>
                <Grid item className={classes.body}>
                  <Grid className={classes.paper.description}>
                    {/* {description ? `Details: ${description}` : 'One moment!'} */}
                    <Typography variant="h5" gutterBottom style={{fontWeight: 'bold'}}>
                      Details
                    </Typography>
                    {description ? `${description}` : 'One moment!'}
                  </Grid>
                </Grid>
              </Grid>
              {/* Attendees */}
              <Grid item lg={4} md={12} xs={12} className={classes.bodySection}>
                <GridList cellHeight={180} className={classes.gridList}>
                  <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                    <ListSubheader component="div">Attendees</ListSubheader>
                  </GridListTile>
                  {attending
                    ? attending.map(attendee => (
                        <GridListTile style={{MarginLeft: 'auto', marginRight: 'auto', width: '50%'}}>
                          <AccountCircle style={{fontSize: 150}} />
                          <GridListTileBar title={attendee.first_name} />
                        </GridListTile>
                      ))
                    : null}
                </GridList>
              </Grid>
              {/* Comments Section */}
              <Grid item lg={12} xs={12} className={classes.bodySection}>
                <Paper className={classes.paper}> Comments Section </Paper>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EventDescription.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventDescription);
