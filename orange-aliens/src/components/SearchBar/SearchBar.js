import React from 'react';
import PropTypes from 'prop-types';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment'; 
import TextField from '@material-ui/core/TextField';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Autosuggest from 'react-autosuggest';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { fetchNeighborhoods } from '../../fetches';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


const styles = theme => ({
    root: {
        height: 75,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            neighborhoods: [],
            neighborhoodsFetched: false,
            suggestedNeighborhoods: [],
            single: '',
            isRedirected: false,
            neighborhoodId: ''
        };
    };

    componentDidMount() {
        if (!this.state.neigborhoodsFetched) {
            fetchNeighborhoods().then(response => {
                this.setState({
                    neighborhoods: response,
                    neighborhoodsFetched: true
                });
            }) 
        };
    };

    // get array of suggested neighborhoods
    getSuggestions = (value) => {
        const { neighborhoods } = this.state;
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;

        const neighborhoodsToKeep = inputLength === 0
            ? []
            : neighborhoods.filter(neighborhood => {
                const keep = count < 5 && neighborhood.name.slice(0, inputLength).toLowerCase() === inputValue;

                if (keep) {
                    count += 1;
                }
                
                return keep;
            });

        return neighborhoodsToKeep;
    };

    // render suggestions
    renderSuggestion = (suggestion, { query, isHighlighted }) => {
        const matches = match(suggestion.name, query);
        const parts = parse(suggestion.name, matches);

        return (
            <MenuItem selected={isHighlighted} component='div'>
                <div>
                    {
                        parts.map((part, index) => {
                            return part.highlight ? (
                                <span key={String(index)} style={{ fontWeight: 500 }}>
                                    {part.text}
                                </span>
                            ) : (
                                <strong key={String(index)} style={{ fontWeight: 300 }}>
                                    {part.text}
                                </strong>
                            );
                        })
                    }
                </div>
            </MenuItem>
        );
    };

    renderInputComponent = (inputProps) => {
        const { classes, inputRef = () => {}, ref, ...other } = inputProps;

        return (
            <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{
                    classes: {
                        input: classes.input,
                    },
                    inputRef: node => {
                        ref(node);
                        inputRef(node);
                    },
                    /*startAdornment: (
                        <InputAdornment position='start'>
                            <Search />
                        </InputAdornment>
                    ),*/
                }}
                {...other}
            />
        ); 
    };

    getSuggestionValue = (suggestion) => {
        return suggestion.name;
    };

    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({ suggestedNeighborhoods: this.getSuggestions(value) });
    };

    handleSuggestionsClearRequested = () => {
        this.setState({ suggestedNeighborhoods: [] });
    };

    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        this.setState({
            isRedirected: true, 
            neighborhoodId: suggestion.id,
        });
    };

    handleChange = name => (event, { newValue }) => {
        this.setState({ [name]: newValue });
    };

    render() {
        if (this.state.isRedirected) {
            return <Redirect to={`/explore/neighborhood/${this.state.neighborhoodId}`} />;
        };

        const { classes } = this.props;
        const autosuggestProps = {
            renderInputComponent: this.renderInputComponent,
            suggestions: this.state.suggestedNeighborhoods,
            onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
            onSuggestionSelected: this.onSuggestionSelected,
            getSuggestionValue: this.getSuggestionValue,
            renderSuggestion: this.renderSuggestion,
        };

        return (
            <div className={classes.root}>
                <Autosuggest
                    {...autosuggestProps}
                    inputProps={{
                        classes,
                        placeholder: 'Search Events By Neighborhood',
                        value: this.state.single,
                        onChange: this.handleChange('single')   
                    }}
                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,
                    }}
                    renderSuggestionsContainer={options => (
                        <Paper {...options.containerProps} square>
                            {options.children}
                        </Paper>
                    )}
                />
                <div className={classes.divider} />
            </div>
        );
    };
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
