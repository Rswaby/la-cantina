
import React, { Component } from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import { MySnackbarContentWrapper } from './MySnackbarContent'
import { CreateEvent } from '../../components';
import {
  fetchCategories,
  getAddressInfo,
  createEvent,
  fetchNeighborhoodByName
} from '../../fetches';
//import { AuthContext } from '../contexts/Auth.context';

class CreateEventWapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoriesfetched: false,
      open: false
    }
    this.handleFinalForm = this.handleFinalForm.bind(this)
  }

  componentWillMount() {
    this.getCategories();
    console.log("conponent will mount")

  }

  componentDidMount() {
    this.getCategories()
    console.log("component did mount")
  }

  handleFinalForm(form, longitude, latitude, neighborhood) {
    form["longitude"] = longitude;
    form["latitude"] = latitude;

    fetchNeighborhoodByName(neighborhood).then(response => {
      if (response[0]) {
        form.neighborhood_id = response[0].id
      } else {
        form.neighborhood_id = 11
      }
      createEvent(form).then(response => {
        console.log("response", response)
      })
    })
    console.log("final Form", form)
    this.handleClick()
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  getCategories() {
    const { categoriesfetched } = this.state;
    if (!categoriesfetched) {

      fetchCategories().then(response => {
        console.log(response)
        this.setState({
          categories: response,
          categoriesfetched: true
        })
      })

    }
  }

  render() {
    console.log("this.props", this.state);
    const { categories } = this.state;
    return (
      <div className="container">
        <CreateEvent
          categories={categories}
          handleFinalForm={this.handleFinalForm}
          getAddressInfo={getAddressInfo}
          fetchNeighborhoodByName={fetchNeighborhoodByName} />

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="Event Created!"
          />
        </Snackbar>
      </div>
    )
  }
}

export default CreateEventWapper;