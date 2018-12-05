import React from 'react';
import PropTypes from 'prop-types';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment'; 
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { EventCategoriesContainer } from '../../containers';


const styles = theme => ({

});

const inlineStyles = {
    logoWrapper: {
        margin: '50px auto 0 auto',
    },
    logo: {
        src: 'https://www.misskatecuttables.com/uploads/shopping_cart/11121/large_orange-halloween-monster.png',
        height: '250px',
        width: '250px'
    },
    fieldWrapper: {
        margin: '0% 25% 5% 25%',
    },
};

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        //const { classes } = this.props;

        return (
            <div>
                <div style={inlineStyles.logoWrapper}>
                   <img src={inlineStyles.logo.src} height={inlineStyles.logo.height} width={inlineStyles.logo.width}/> 
                </div>
                <div style={inlineStyles.fieldWrapper}>
                    <FormControl fullWidth>
                        <TextField
                            id="outlined-bare"
                            //className={classes.TextField}
                            placeholder="Search Events"
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
                </div>
                <div>
                    <EventCategoriesContainer />
                </div>
            </div>
        );
    }
}

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default LandingPage;
