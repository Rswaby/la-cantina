
import React, { Component } from 'react';

import { Register } from '../../components';

class registerWrapper extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() { 
    }

    render() {
        //const hasSchools = !isEmpty(this.state.schools);
        return (

            <Register {...this.props}  />
        )
    }
}

export default (registerWrapper)
