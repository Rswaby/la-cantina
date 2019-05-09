import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  withStyles,
  CardMedia,
  CardActionArea,
  Divider,
} from '@material-ui/core'
const styles = {
  main_grid: {
    'margin-top': 15,
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
    marginLeft:20,
    marginRight:20,
    marginTop:20,
  },
}
class EventCard extends Component {
  render() {
    const { classes, event, handleMouseOver,handleMouseOut, cardId } = this.props
    return (
      <Card className={classes.card}>
        <CardActionArea component={Link} to={`/event/${event.id}/${event.group.urlname}`} onMouseOut={() => handleMouseOut(cardId)} onMouseOver={() => handleMouseOver(cardId)}>
          <Grid className={classes.main_grid} container>
            {<CardMedia
              className={classes.cover}
              image="..."
              title="fake Image"
            />}
            <Grid item sm={6}>
              <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                  {event.name}
                </Typography>
                {/* <Typography component="p">{event.description}</Typography> */}
              </CardContent>
            </Grid>
            <Grid item sm={3}>
              <CardContent>
                <Typography className={classes.pos} color="textPrimary">
                 {event.local_date}
                </Typography>
                <Divider />
                <Typography className={classes.pos} color="textPrimary">
                  {event.venue? event.venue.address_1: "no address"}
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
