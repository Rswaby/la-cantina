import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router'
const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "600px",
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            isRedirected: false
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.history.push(`/explore/${this.state.query}`)
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className="searchBar" elevation={1}>
                <IconButton className={classes.iconButton} aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <InputBase onChange={this.handleChange('query')} className="searchBar" placeholder="Search " />
                </form>
            </Paper>
        );
    }
}
SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(withRouter(SearchBar));

