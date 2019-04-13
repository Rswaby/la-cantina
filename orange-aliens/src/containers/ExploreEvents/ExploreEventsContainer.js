import React, { Component } from 'react';
import { ExploreEvents } from '../../components';
import { EventsData } from './MockEventsData';
import { fetchEventByEntityId, fetchAllEvents,getUpcommingEvents} from '../../fetches';
export default class ExploreEventsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            EventsData: [],
            MeetupEvents:[],
            DidFetch: false

        }
    }

    componentDidMount() {
        const { params } = this.props.match;
        if (params && params.entityName && params.entityId) {
            fetchEventByEntityId(params.entityName, params.entityId).then(response => {
                this.setState({
                    EventsData: response.events,
                    DidFetch: true
                })
                console.log(response)
            })
             //CALL TO BACKEND MEETUP API
             getUpcommingEvents("free",20)
             .then(data => {
                 this.setState({
                     MeetupEvents:data.response,
                 })
             })
        } else if (this.props.match.path === "/explore") {
            //CALL TO BACKEND MEETUP API
            getUpcommingEvents("free",20)
                .then(data => {
                    this.setState({
                        MeetupEvents:data.response,
                    })
                })

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
        const { DidFetch, EventsData, MeetupEvents } = this.state;
        return (
            <div>
                {DidFetch ? <ExploreEvents EventsData={EventsData} MeetupEventsData={MeetupEvents} /> : <h5>loading...</h5>}
            </div>
        )
    }
}

