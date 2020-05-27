import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TicketMasterService from "../services/TicketMasterService"
import SearchComponent from "../components/SearchComponent";
import EventSearchResultComponent from "../components/EventSearchResultComponent";
import EventDetailComponent from "../components/EventDetailComponent";

export default class EventContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            event: {id: -1},
        };

        this.searchEventHandler = this.searchEventHandler.bind(this);
        this.selectEventHandler = this.selectEventHandler.bind(this);
    }

    searchEventHandler = async (params) => {
        const data = await TicketMasterService.getEvents(params);
        if(data.hasOwnProperty('_embedded')){
            this.setState({events: data._embedded.events});
        } else {
            // TODO: message saying no events found
        }
    };

    selectEventHandler = async (event_id) => {
        const data = await TicketMasterService.getEvent(event_id);
        this.setState({event: data});
    };

    render() {
        return(
            <BrowserRouter>
                <Route path="/event/search/" render={(props) =>
                    <SearchComponent {...props}
                                     searchEventHandler={this.searchEventHandler}/>}
                />
                <Route path="/event/search/results" render={(props) =>
                    <EventSearchResultComponent {...props}
                                                events={this.state.events}
                                                selectEventHandler={this.selectEventHandler}/>}
                />
                <Route path={`/event/${this.state.event.id}`} render={(props) =>
                    <EventDetailComponent {...props}
                                          event={this.state.event}/>}
                />
            </BrowserRouter>
        )
    }
}