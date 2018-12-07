import React from 'react';
import PropTypes from 'prop-types';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment'; 
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { EventCategoriesContainer } from '../../containers';
import { fetchNeighborhoods } from '../../fetches';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Autosuggest from 'react-autosuggest';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';


const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
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

const inlineStyles = {
    logoWrapper: {
        margin: '50px auto 0 auto',
    },
    logo: {
        src: 'https://static.thenounproject.com/png/36684-200.png',
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
        this.state = {
            neigborhoods: [],
            neigborhoodsFetched: false,
            suggestedNeighborhoods: [],
            single: '',
            popper: ''
        };
    };

    componentDidMount() {
        if (!this.state.neigborhoodsFetched) {
            fetchNeighborhoods().then(response => {
                this.setState({
                    neigborhoods: response,
                    neigborhoodsFetched: true
                });
            }) 
        };
    };

    // get array of suggested neighborhoods
    getSuggestions = (value) => {
        const { neigborhoods } = this.state;
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;

        const neighborhoodsToKeep = inputLength === 0
            ? []
            : neigborhoods.filter(neighborhood => {
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
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Search />
                        </InputAdornment>
                    ),
                    inputRef: node => {
                        ref(node);
                        inputRef(node);
                    },
                    classes: {
                        input: classes.input,
                    },
                }}
                variant="outlined"
                margin="normal"

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

    handleChange = name => (event, { newValue }) => {
        this.setState({ [name]: newValue });
    };

    render() {
        const { classes } = this.props;
        const autosuggestProps = {
            renderInputComponent: this.renderInputComponent,
            suggestions: this.state.suggestedNeighborhoods,
            onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
            getSuggestionValue: this.getSuggestionValue,
            renderSuggestion: this.renderSuggestion 
        };

    return (
        <div>
                <div style={inlineStyles.logoWrapper}>
                   <img src={inlineStyles.logo.src} height={inlineStyles.logo.height} width={inlineStyles.logo.width}/> 
                </div>
        <div style={inlineStyles.fieldWrapper}>
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

export default withStyles(styles)(LandingPage);
