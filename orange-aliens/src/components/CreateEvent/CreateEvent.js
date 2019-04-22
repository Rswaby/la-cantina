
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField, MenuItem, Button } from '@material-ui/core';
import { styles } from './CreateEvent.styles'

class CreateEvent extends Component {
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
  };
  handleClick(event) {
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
            return ""
          })//end of map
        }

        this.props.handleFinalForm(this.state, lng, lat, neighborhood)
      })
    }
    event.preventDefault();

  }

  render() {
    const { classes, categories } = this.props;

    const renderForm = () => {
      return (
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container xs={12} sm={12} justify="center">
            <TextField required id="standard-name" label="Name" rowsMax="3" className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
          </Grid>
          <Grid container justify="center">
            <TextField id="category" select label="Category" className={classes.textField2}
              value={this.state.category_id}
              onChange={this.handleChange('category_id')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select a category"
              margin="normal">
              {categories.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField required id="standard-number" label="Capacity" value={this.state.capacity}
              onChange={this.handleChange('capacity')}
              type="number"
              className={classes.textField3}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
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
            />
            <TextField required id="standard-number" label="Duration (min)" value={this.state.duration}
              onChange={this.handleChange('duration')}
              type="number"
              className={classes.textField3}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </Grid>
          <Grid container justify="center">
            <TextField id="standard-multiline-static" label="Event Details" multiline rows="8" value={this.state.description}
              onChange={this.handleChange('description')}
              className={classes.textField4}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid container justify="center" className={classes.dense}>
            <Button type='submit' variant="outlined" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
              {"  "} Create LinkUp Event {"  "}
            </Button>
          </Grid>
        </form>
      )
    }

    return (
      <Grid container xs={12} sm={12} className={classes.root} spacing={24}>
        <Grid>
          {renderForm()}
        </Grid>
      </Grid>
    );
  }
}

CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateEvent);