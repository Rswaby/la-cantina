import React from 'react';
import { SearchBarContainer, EventCategoriesContainer } from '../../containers';


const inlineStyles = {
    logoWrapper: {
        margin: '50px auto 0 auto',
    },
    logo: {
        src: 'https://static.thenounproject.com/png/36684-200.png',
        height: '250px',
        width: '250px'
    }
}

const LandingPage = (props) => {
    return (
        <div>
            <div style={inlineStyles.logoWrapper}>
                <img src={inlineStyles.logo.src} height={inlineStyles.logo.height} width={inlineStyles.logo.width}/> 
            </div>
            <SearchBarContainer />
            <EventCategoriesContainer />
        </div>
    );
};

export default LandingPage;
