import React from 'react';
import PropTypes from 'prop-types';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment'; 
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';

class LandingPage extends React.Component {

    render() {
        const { classes } = this.props;

        return (
                //<form>
                <FormControl fullWidth>
                    <TextField
                        id="outlined-bare"
                        //className={classes.TextField}
                        placeholder="search events"
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
                //</form>
        );
    }
}

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default LandingPage;
