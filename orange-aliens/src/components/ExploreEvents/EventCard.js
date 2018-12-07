/** @format */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  withStyles,
  CardMedia,
  CardActionArea,
  Divider,
  Button,
} from '@material-ui/core'
const styles = {
  main_grid: {
    'margin-top': 15,
  },
  card: {
    minWidth: 275,
    height: 185,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  cover: {
    width: 151,
    // height:100,
  },
  card: {
    display: 'flex',
  },
}
class EventCard extends Component {
  render() {
    const {classes, event} = this.props
    //const bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card}>
        <CardActionArea component={Link} to={`/event/${event.id}`}>
          <Grid className={classes.main_grid} container>
            <CardMedia
              className={classes.cover}
              image="https://www.gstatic.com/webp/gallery/2.jpg"
              title="fake Image"
            />
            <Grid item sm={6}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {event.name}
                </Typography>
                <Typography component="p">{event.description}</Typography>
              </CardContent>
            </Grid>
            <Grid item sm={3}>
              <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                  {/* {moment(event.time).format("hh:mm a")} */}
                </Typography>
                <Divider />
                <Typography className={classes.pos} color="textSecondary">
                  {event.address}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    )
  }
}
export default withStyles(styles)(EventCard)
