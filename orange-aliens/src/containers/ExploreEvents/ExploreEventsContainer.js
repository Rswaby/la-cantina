import React, { Component } from 'react';
import { ExploreEvents } from '../../components';
import { fetchAllEvents, getUpcommingEvents } from '../../fetches';
import { Loader } from 'semantic-ui-react'
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
        if (params && params.text) {
            //CALL TO BACKEND MEETUP API
            getUpcommingEvents(params.text, 40)
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
            getUpcommingEvents("New York", 40)
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
            gridMarker: gridMarker
        })
    }
    handleMouseOut(cardId) {
        const { gridMarker } = this.state;

        gridMarker[cardId] = false
        this.setState({
            gridMarker: gridMarker
        })
    }
    render() {
        const { EventsData, MeetupEvents, MeetupFetch, gridMarker } = this.state;
        return (
            <div>
                {MeetupFetch ? <ExploreEvents
                    handleMouseOut={this.handleMouseOut}
                    handleMouseOver={this.handleMouseOver}
                    searchResultsfor={this.props.match.params.text}
                    gridMarker={gridMarker}
                    EventsData={EventsData}
                    Fetched={MeetupFetch}
                    meetupEvents={MeetupEvents} /> : <Loader indeterminate>getting events based on {this.props.match.params.text}</Loader>}
            </div>
        )
    }
}

