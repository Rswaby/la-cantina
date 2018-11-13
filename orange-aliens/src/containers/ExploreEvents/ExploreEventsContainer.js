import React, { Component } from 'react';
import { ExploreEvents } from '../../components';
import { EventsData } from './MockEventsData';
export default class ExploreEventsContainer extends Component {
    render() {
        //const data = EventsData()
        return (
            <div>
                <ExploreEvents EventsData={EventsData()} />
            </div>
        )
    }
}

