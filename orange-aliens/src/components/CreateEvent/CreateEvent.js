
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField, MenuItem, Button } from '@material-ui/core';
import Banner from './Banner'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 10,
    width: 600,
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 5,
    width: 250,
  },
  textField3: {
    marginLeft: theme.spacing.unit * 11,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 5,
    width: 250,
  },
  textField4: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 10,
    width: 600,
    height: 200
  },
  root: {
    flexGrow: 1,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class CreateEvent extends Component {
  //static contextType = AuthContext;

  state = {
    name: '',
    capacity: 1,
    category_id: '',
    address: '',
    date_time: '',
    description: '',
    longitude: '',
    latitude: '',
    organizer_id: 1,
    neighborhood_id: 11,
    duration: 60,
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    //event.preventDefault();
  };
  handleClick(event) {
    //console.log(this.state, this.props);
    const { address } = this.state;
    let neighborhood = "none";
    if (address) {
      this.props.getAddressInfo(address).then(response => {
        console.log(response);
        const { lat, lng } = response.results[0].geometry.location;
        if (response.status === 'OK') {
          response.results[0].address_components.map((value) => {
            if (value.types[0] === 'neighborhood') {
              neighborhood = value.long_name
              console.log("found", neighborhood)
            }
          })//end of map
        }

        this.props.handleFinalForm(this.state, lng, lat, neighborhood)
      })
    }
    event.preventDefault();

  }

  render() {
    const { classes, categories } = this.props;
    //console.log("props[create event]", this.state)

    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid container justify={"center"}>
          <form className={classes.container} noValidate autoComplete="off">
            <Grid container justify="center" sm={12}>
              <TextField
                required
                id="standard-name"
                label="Name"
                rowsMax="3"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              // variant="filled"
              />
            </Grid>
            <Grid container justify="center">
              <TextField
                id="category"
                select
                label="Category"
                className={classes.textField2}
                value={this.state.category_id}
                onChange={this.handleChange('category_id')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                //variant="filled"
                helperText="Please select a category"
                margin="normal">
                {categories.map(option => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="standard-number"
                label="Capacity"
                value={this.state.capacity}
                onChange={this.handleChange('capacity')}
                type="number"
                className={classes.textField3}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              //variant="filled"
              />
            </Grid>

            <Grid container justify="center">
              <TextField
                required
                id="standard-textarea"
                label="Event Address"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleChange('address')}
                multiline
                className={classes.textField}
                margin="normal"
              //variant="filled"
              />
            </Grid>
            <Grid container justify="center">
              <TextField
                id="date_time-local"
                label="Event Date & Time"
                type="dateTime-local"
                className={classes.textField2}
                value={this.state.date_time}
                onChange={this.handleChange('date_time')}
                InputLabelProps={{
                  shrink: true,
                }}
              //variant="filled"
              />
              <TextField
                required
                id="standard-number"
                label="Duration (min)"
                value={this.state.duration}
                onChange={this.handleChange('duration')}
                type="number"
                className={classes.textField3}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              //variant="filled"
              />
            </Grid>
            <Grid container justify="center">
              <TextField
                id="standard-multiline-static"
                label="Event Details"
                multiline
                rows="8"
                value={this.state.description}
                onChange={this.handleChange('description')}
                className={classes.textField4}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid container justify="center" className={classes.dense}>
              <Button type='submit' variant="outlined" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
                Create
      				</Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateEvent);