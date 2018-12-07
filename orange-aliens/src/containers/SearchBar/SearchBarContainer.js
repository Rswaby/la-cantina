import React from 'react';
import { SearchBar } from '../../components';


const inlineStyles = {
    fieldWrapper: {
        margin: '0% 25% 5% 25%',
    },
};

const SearchBarContainer = (props) => {
    console.log('container props', props);
    return (
        <div style={inlineStyles.fieldWrapper}>
            <SearchBar />
        </div>
    );
};

export default SearchBarContainer;
