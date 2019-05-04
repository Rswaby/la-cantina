import React from 'react';
import { SearchBarContainer, EventCategoriesContainer } from '../../containers';
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const inlineStyles = {
    logoWrapper: {
        margin: '50px auto 0 auto',
    },
    logo: {
        src: 'https://static.thenounproject.com/png/36684-200.png',
        height: '250px',
        width: '250px'
    },
    root: {
        flexgrow: 1,
    },
}

const LandingPage = (props) => {
    return (
        <div className={inlineStyles.root}>
            <Grid container direction="row" alignContent="center">
                
                <Grid item xs={12} alignItems="center">
                    <div style={inlineStyles.logoWrapper}>
                        <img src={inlineStyles.logo.src} alt="Logo" height={inlineStyles.logo.height} width={inlineStyles.logo.width}/> 
                    </div>
                </Grid>
                
                <Grid item xs={12}>
                    <SearchBarContainer />
                </Grid>
                
                <Grid item xs={12}>
                    <EventCategoriesContainer />
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(inlineStyles)(LandingPage);