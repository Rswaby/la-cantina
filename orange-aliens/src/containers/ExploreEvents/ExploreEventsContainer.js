import React, { Component } from 'react';
import { ExploreEvents } from '../../components';
import { fetchEventByEntityId, fetchAllEvents, getUpcommingEvents } from '../../fetches';
export default class ExploreEventsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            EventsData: [],
            MeetupEvents: [],
            DidFetch: false,
            MeetupFetch: false,
            gridMarker: {}

        }
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
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
            getUpcommingEvents("free", 40)
                .then(data => {

                    let dict = {}
                    data.response.events.map((event, index) => {
                        dict[index] = false
                    })
                    this.setState({
                        MeetupEvents: data.response,
                        MeetupFetch: true,
                        gridMarker: dict
                    })

                })
        } else if (this.props.match.path === "/explore") {
            //CALL TO BACKEND MEETUP API
            getUpcommingEvents("Free drinks", 40)
                .then(data => {
                    let dict = []
                    data.response.events.map((event, index) => {
                        dict[index] = false
                    })
                    this.setState({
                        MeetupEvents: data.response,
                        MeetupFetch: true,
                        gridMarker: dict
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

    handleMouseOver(cardId) {
        const { gridMarker } = this.state;
        
        gridMarker[cardId] = true
        this.setState({
            gridMarker:gridMarker
        })
    }
    handleMouseOut(cardId) {
        const { gridMarker } = this.state;
        
        gridMarker[cardId] = false
        this.setState({
            gridMarker:gridMarker
        })
    }
    render() {
        const { EventsData, MeetupEvents, MeetupFetch, gridMarker } = this.state;
        console.log("Explore Event Container::: ", gridMarker)
        return (
            <div>
                {MeetupFetch ? <ExploreEvents
                    handleMouseOut={this.handleMouseOut}
                    handleMouseOver={this.handleMouseOver}
                    gridMarker={gridMarker}
                    EventsData={EventsData}
                    Fetched={MeetupFetch}
                    meetupEvents={MeetupEvents} /> : <h5>loading...</h5>}
            </div>
        )
    }
}

