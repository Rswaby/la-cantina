
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField, MenuItem } from '@material-ui/core';
import Banner from './Banner'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class CreateEvent extends Component {
  //static contextType = AuthContext;

  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    // event.preventDefault();
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid container justify={"center"}>
          <form className={classes.container} noValidate autoComplete="off">
            <Grid item sm={12}>
              <TextField
                required
                id="standard-name"
                label="Name"
                className={classes.textField}
                onChange={this.handleChange('name')}
                margin="normal"
              />
            </Grid>
            <Grid item sm={12} >
              <TextField
                required
                id="standard-name"
                label="Name"
                className={classes.textField}
                onChange={this.handleChange('name')}
                margin="normal"
              />
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

// <TextField
//               required
//               id="standard-name"
//               label="Name"
//               className={classes.textField}
//               value={this.state.name}
//               onChange={this.handleChange('name')}
//               margin="normal"
//             />
//             <TextField
//               id="standard-uncontrolled"
//               label="Uncontrolled"
//               defaultValue="foo"
//               className={classes.textField}
//               margin="normal"
//             />
//             <TextField
//               required
//               id="standard-required"
//               label="Required"
//               defaultValue="Hello World"
//               className={classes.textField}
//               margin="normal"
//             />
//             <TextField
//               error//will be usfull to use to check form validity 
//               id="standard-error"
//               label="Error"
//               defaultValue="Hello World"
//               className={classes.textField}
//               margin="normal"
//             />
//             <TextField
//               id="standard-dense"
//               label="Dense"
//               className={classNames(classes.textField, classes.dense)}
//               margin="dense"
//             />
//             <TextField
//               id="standard-multiline-flexible"
//               label="Multiline"
//               multiline
//               rowsMax="4"
//               value={this.state.multiline}
//               onChange={this.handleChange('multiline')}
//               className={classes.textField}
//               margin="normal"
//             />
//             <TextField
//               id="standard-multiline-static"
//               label="Multiline"
//               multiline
//               rows="4"
//               defaultValue="Default Value"
//               className={classes.textField}
//               margin="normal"
//             />


//             <TextField
//               id="standard-textarea"
//               label="With placeholder multiline"
//               placeholder="Placeholder"
//               multiline
//               className={classes.textField}
//               margin="normal"
//             />
//             <TextField
//               id="standard-number"
//               label="Number"
//               value={this.state.age}
//               onChange={this.handleChange('age')}
//               type="number"
//               className={classes.textField}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               margin="normal"
//             />
//             <TextField
//               id="standard-search"
//               label="Search field"
//               type="search"
//               className={classes.textField}
//               margin="normal"
//             />
//             <TextField
//               id="n-currency"
//               select
//               label="Select"
//               className={classes.textField}
//               value={this.state.currency}
//               onChange={this.handleChange('currency')}
//               SelectProps={{
//                 MenuProps: {
//                   className: classes.menu,
//                 },
//               }}
//               helperText="Please select your currency"
//               margin="normal"
//             >
//               {currencies.map(option => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>