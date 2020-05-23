import React from 'react'
import EventCardComponent from "./EventCardComponent";

export default class EventSearchResultComponent
    extends React.Component {
    render() {
        return(
            <div>
                <h1>Search results</h1>
                <div className="card-deck">
                    <EventCardComponent/>
                    <EventCardComponent/>
                    <EventCardComponent/>
                </div>
            </div>
        )
    }
}