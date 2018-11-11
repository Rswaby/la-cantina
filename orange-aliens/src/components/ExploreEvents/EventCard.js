// import React, { Component } from 'react';
// //import { Header } from '../../components';
// import { Link,  BrowserRouter as Router} from 'react-router-dom';
// import moment from 'moment';
// import {
//     Card, CardContent,
//     Typography, Grid, withStyles, CardMedia,
//     CardActionArea, Divider, Button
// } from '@material-ui/core';
// import TimerIcon from '@material-ui/icons/Timer';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import classNames from 'classnames';
// import styles from './EventListCard.styles';

// class EventListCard extends Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const { classes, event, params } = this.props;
//         return (
//             <Card className={classes.card}>
//             <CardActionArea component={Link} style={{color: "white"}}
//                 to={`/category/${params.category}/${params.subtopic}/${event.id}`}>
//                 <Grid className={classes.main_grid} container sm={12}>
//                     <Grid item sm={3}>
//                         <CardContent>
//                             <Typography className={classNames(classes.pos, classes.coord)} color="textSecondary">
//                                 <TimerIcon className={classes.icon}/>
//                                 {moment(event.time).format("hh:mm a")}
//                             </Typography>
//                             <Divider />
//                             <Typography className={classNames(classes.pos, classes.coord)} color="textSecondary">
//                                 <LocationOnIcon className={classes.icon}/>
//                                 {event.location? event.location:"Location"}
//                             </Typography>
//                         </CardContent>
//                     </Grid>
//                     <Grid item sm={9}>
//                         <CardContent>
//                             <Typography className={classes.title} gutterBottom>
//                                 {event.name}
//                             </Typography>
//                             <Typography component="p" className={classes.description}>
//                                 {event.description}
//                             </Typography>
//                         </CardContent>
//                     </Grid>
//                 </Grid>
//                 </CardActionArea>    
//             </Card>
//         )
//     }

// }

// export default withStyles(styles)(EventListCard);



