import React from 'react';
import PropTypes from 'prop-types';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment'; 
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';


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
        margin: '0px 50px 100px 50px',
    },
};

class LandingPage extends React.Component {

    render() {
        const { classes } = this.props;

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
                    <Typography component='p'>
                        Explore Events By Category
                    </Typography>
                </div>
                <div>
                    <Grid container spacing={20}>
                        <Grid item xs={3}>
                            <Paper>
                                <Typography component='p'>
                                    Outdoors & Adventure
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <Typography component='p'>
                                    Sports & Fitness
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <Typography component='p'>
                                    Food & Drink
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>
                                <Typography component='p'>
                                    Language & Culture
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default LandingPage;
