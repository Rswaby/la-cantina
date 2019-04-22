import React, { Component } from 'react';
import { ExploreEvents } from '../../components';
import { fetchEventByEntityId, fetchAllEvents,getUpcommingEvents} from '../../fetches';
export default class ExploreEventsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            EventsData: [],
            MeetupEvents:[],
            DidFetch: false,
            MeetupFetch:false

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
                
            })
             //CALL TO BACKEND MEETUP API
             getUpcommingEvents("free",30)
             .then(data => {
                 this.setState({
                     MeetupEvents:data.response,
                     MeetupFetch:true
                 })
             })
        } else if (this.props.match.path === "/explore") {
            //CALL TO BACKEND MEETUP API
            getUpcommingEvents("free",20)
                .then(data => {
                    this.setState({
                        MeetupEvents:data.response,
                        MeetupFetch:true
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
        const { DidFetch, EventsData, MeetupEvents, MeetupFetch } = this.state;
        return (
            <div>
                {DidFetch ? <ExploreEvents EventsData={EventsData} Fetched={MeetupFetch} meetupEvents={MeetupEvents} /> : <h5>loading...</h5>}
            </div>
        )
    }
}

