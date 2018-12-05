
import React, { Component } from 'react';

import { CreateEvent } from '../../components';
import { fetchCategories, getAddressInfo, createEvent } from '../../fetches';
//import { AuthContext } from '../contexts/Auth.context';

class CreateEventWapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoriesfetched: false,
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

  handleFinalForm(form,longitude,latitude) {
    //console.log("Final Form", form);
    //form["capacity"] = parseInt(form.capacity)
    form["longitude"] = longitude;
    form["latitude"] = latitude;
    console.log("final Form", form)
    createEvent(form).then(response=>{
      console.log("Post Response: ",response)
    })

  }

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
      <CreateEvent categories={categories} handleFinalForm={this.handleFinalForm} getAddressInfo={getAddressInfo} />
    )
  }
}

export default CreateEventWapper;