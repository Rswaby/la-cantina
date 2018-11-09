
import React, { Component } from 'react';

import { Register } from '../../components';
//import { AuthContext } from '../../contexts/Auth.context';
//import { fetchSchools } from '../../fetches';
//import { isEmpty } from 'lodash';

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
