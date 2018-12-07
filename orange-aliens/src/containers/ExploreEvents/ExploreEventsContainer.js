import React, { Component } from 'react';
import { ExploreEvents } from '../../components';
import { EventsData } from './MockEventsData';
import { fetchEventByEntityId, fetchAllEvents } from '../../fetches';
export default class ExploreEventsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            EventsData: [],
            DidFetch: false

        }
    }

    componentDidMount() {
        const { params } = this.props.match;
        console.log("Component did mount", this.props)
        if (params && params.entityName && params.entityId) {
            fetchEventByEntityId(params.entityName, params.entityId).then(response => {
                this.setState({
                    EventsData: response.events,
                    DidFetch: true
                })
                console.log(response)
            })
        } else if (this.props.match.path === "/explore") {
            console.log("what")
            fetchAllEvents().then(response => {
                this.setState({
                    EventsData: response,
                    DidFetch: true
                })
            })
        }
    }
    render() {
        console.log(this.state)
        const { DidFetch, EventsData } = this.state;
        //const data = EventsData()
        return (
            <div>
                {DidFetch ? <ExploreEvents EventsData={EventsData} /> : <h5>loading...</h5>}
            </div>
        )
    }
}

