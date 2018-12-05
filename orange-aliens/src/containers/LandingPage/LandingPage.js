import React from 'react';
import { LandingPage } from '../../components';

class LandingPageWrapper extends React.Component {

    render() {
        return (
            <div>
                <LandingPage {...this.props} />
            </div>
        );
    }
}

export default LandingPageWrapper;
