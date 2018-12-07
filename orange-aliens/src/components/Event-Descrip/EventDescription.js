/** @format */

import React, {Component} from 'react'
import Calendar from 'react-calendar'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import moment from 'moment'
import {Button, Grid, Paper, Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
  },
  bodySection: {
    backgroundColor: '#F6F7F8',
  },
})

class EventDescription extends Component {
  render() {
    const {address, attending, capacity, classes, date_time, description, name, organizer} = this.props

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
              {/* Map and Calender Section */}
              <Grid item lg={4} md={6} xs={12} className={classes.bodySection}>
                <Grid item alignItems="center" justify="center" className={classes.body}>
                  <Calendar value={date_time} style={{marginRight: '30px'}} />
                </Grid>
              </Grid>
              {/* Photos Section */}
              <Grid item lg={6} xs={12} className={classes.bodySection}>
                <Paper className={classes.paper}> Photos Section </Paper>
              </Grid>
              {/* Attendees */}
              <Grid item lg={6} xs={12} className={classes.bodySection}>
                {/* <Paper className={classes.paper}> */}
                {attending
                  ? attending.map(attendee => (
                      <Grid item>
                        <Card key={attendee.id} sm={6} xs={6}>
                          <CardActionArea image="">
                            <CardMedia
                              image={require('../../images/baseline-person-24px.svg')}
                              title="account placeholder"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <p>
                                  {attendee.first_name} {attendee.last_name}
                                </p>
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))
                  : null}
                {/* </Paper> */}
              </Grid>
              {/* Comments Section */}
              <Grid item lg={12} xs={12} className={classes.bodySection}>
                <Paper className={classes.paper}> Comments Section </Paper>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </div>
    )
  }
}

EventDescription.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EventDescription)
